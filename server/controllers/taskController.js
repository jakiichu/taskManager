const {Task} = require('../models/models')
const  ApiError = require('../error/ApiError')
class TaskController {
    async create(req, res, next){
        try{
            const {name} = req.body
            const task = await Task.create({name})
            return res.json(task)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
        const task = await Task.findAll()
        return res.json(task)
    }

    async getOne(req, res){
        const {id} = req.params
        const task = await Task.findOne(
            {where: {id}}
        )
        return res.json(task)
    }

    async delete(req, res){
        const {id} = req.params
        const task = await Task.destroy(
            {where: {id}}
        )
        return res.json(task)
    }
}

module.exports = new TaskController()