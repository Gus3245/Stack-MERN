import NewsService from "../Services/news.Service.js";


const create = async (req, res) => {
    try {
        const {authorization} = req.headers;
        console.log(authorization);

        if (!authorization){
            return res.send(401).send({message: "Not Authored"});
        }

        const parts = authorization.split(" ");
        const [schema, token] = parts;

        if(parts.length !==2){
            return res.send(401).send({message: "Not Authored"});
        }

        if(schema !== "Bearer"){
            return res.send(401).send({message: "Not Authored"});
        }

        

        const {title, content, banner} = req.body;

        if(!title || !content || !banner){
            return res.status(400).send({message: "Submit All Fields"});
        }

        const CreatedNews = await NewsService.createService({
            title,
            content,
            banner,
            user: {_id: "678025ab95f1e155fc59f6cb"}
        });

        res.status(200).send({CreatedNews});
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

const findAll = async (req, res) => {
    try {
        const News = await NewsService.findAllService();
        
        if(News.length === 0){
            return res.status(404).send({message: "News Not Found"});
        }
        res.status(200).send({News});

    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

export default { create, findAll};