const utils = require('../utils/index')
const Category = require('../models/category')
const ServicePrice = require('../models/service_price')
const Service = require('../models/service')


const login = (req, res) => {
    try{
        const adminObj = {
            email: 'admin@codesfortomorrow.com',
            password: 'Admin123!@#'
        }
        if(req.body.email == adminObj.email && req.body.password == adminObj.password){
            const token = utils.generateToken();
            res.status(200).json({token: token});
        } else {
            res.status(500).json({message: 'Credential error'})
        }
    }catch(error){
        console.log(error);
        res.statu(500).json({message: 'Internal server error'})
    }
}
const saveCategory = async(req, res) => {
    try{
        const body = req.body;
        await Category.create(body);
        res.status(200).json({message: 'Successfully save category data'})
    }catch(error){
        console.log(error)
        res.statu(500).json({message: 'Internal server error'})
    }
}
const getCategories = async(req, res) => {
    try{
        const categoryList = await Category.findAll();
        res.status(200).json({list: categoryList});
    }catch(error){
        console.log(error)
        res.statu(500).json({message: 'Internal server error'})
    }
}
const updateCategory = async(req, res) => {
    try{
        const categoryId = req.params.categoryId;
        const body = req.body;
        await Category.update(body, {where: {categoryId: categoryId}});
        res.status(200).json({message: 'Successfully update category'})
    }catch(error){
        console.log(error)
        res.statu(500).json({message: 'Internal server error'})
    }
}
const deleteCateory = async(req, res) => {
    try{
        await Category.destroy({where: {categoryId: req.params.categoryId}})
        res.status(200).json({message: 'Successfully delete category'})
    }catch(error){
        console.log(error)
        res.statu(500).json({message: 'Internal server error'})
    }
}
const saveService = async(req, res) => {
    try{
        const body = req.body;
        await Service.create(body);
        res.status(200).josn({message: 'Successfully service data save'})
    }catch(error){
        console.log(error)
        res.statu(500).json({message: 'Internal server error'})
    }
}
const getSirvices = async(req, res) => {
    try{
        const serviceList = await Service.findAll({where: {categoryId: req.params.categoryId}})
        res.status(200).jons({list: serviceList});
    }catch(error){
        console.log(error)
        res.statu(500).json({message: 'Internal server error'})
    }
}
const deleteService = async(req, res) => {
    try{
        const categoryId = req.params.categoryId;
        const serviceId = req.params.serviceId;
        await Service.destroy({where: {categoryId: categoryId, serviceId: serviceId}});
        res.status(200).json({message: 'Successfully delete service'})
    }catch(error){
        console.log(error)
        res.statu(500).json({message: 'Internal server error'})
    }
}
const updateService = async(req, res) => {
    try{
        await Service.update(req.body, {where: {categoryId: req.params.categoryId, serviceId: req.params.serviceId}});
    }catch(error){
        console.log(error)
        res.statu(500).json({message: 'Internal server error'})
    }
}

module.exports = {
    saveCategory,
    getCategories,
    updateCategory,
    deleteCateory,
    saveService,
    getSirvices,
    deleteService,
    updateService,
    login
}