import NewsService from "../Services/news.Service.js";


const create = async (req, res) => {
    try {
        const {title, content, banner} = req.body;

        if(!title || !content || !banner){
            return res.status(400).send({message: "Bad Resquest"});
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

const findAll = (req, res) => {
    try {
        res.status(200).send({message: "News Created"});
    } catch (error) {
        
    }
}

export default { create, findAll};