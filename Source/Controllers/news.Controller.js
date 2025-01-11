import NewsService from "../Services/news.Service.js";

const create = (req, res) => {
    try {
        res.send(200).json({message: "News Created"});
    } catch (error) {
        
    }
}

const findAll = (req, res) => {
    try {
        res.send(200).json({message: "News Created"});
    } catch (error) {
        
    }
}

export default { create, findAll};