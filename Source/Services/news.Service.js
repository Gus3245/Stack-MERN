import NewsSchema from "../Models/News.js"

const createService = (body) => NewsSchema.create(body);
const findAllService = () => NewsSchema.find({});

export default {createService, findAllService };