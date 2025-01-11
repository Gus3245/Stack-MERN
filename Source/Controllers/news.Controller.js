import NewsService from "../Services/news.Service.js";

const create = (req, res) => {
    try {
        res.status(200).send({message: "News Created"});
    } catch (error) {
        
    }
}

const findAll = (req, res) => {
    try {
        res.status(200).send({message: "News Created"});
    } catch (error) {
        
    }
}

export default { create, findAll};