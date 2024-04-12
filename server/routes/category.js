const router = require('express').Router();
const Manager = require('../manager/index')
const Authenticate = require('../middleware/verify_json');

router.post('/login', Manager.login);
router.post('/category', Authenticate.verifyJsonToken, Manager.saveCategory);
router.get('/categories', Authenticate.verifyJsonToken, Manager.getCategories);
router.put('/category/:categoryId', Authenticate.verifyJsonToken, Manager.updateCategory);
router.delete('/category/:categoryId', Authenticate.verifyJsonToken, Manager.deleteCateory);
router.post('/category/:categoryId/service', Authenticate.verifyJsonToken, Manager.saveService);
router.get('/category/:categoryId/services', Authenticate.verifyJsonToken, Manager.getSirvices)
router.delete('/category/:categoryId/service/:serviceId', Authenticate.verifyJsonToken, Manager.deleteService)
router.put('/category/:categoryId/service/:serviceId', Authenticate.verifyJsonToken, Manager.updateService);


module.exports = router;

