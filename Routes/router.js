const express = require('express')
const productController = require('../Controllers/productController')
const userController  =require('../Controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const wishlistController = require('../Controllers/wishlistController')

const router = new express.Router()

//getAll products
router.get('/products/all',productController.getAllProductscontroller)
//register
router.post('/user/register',userController.registerController)
//login
router.post('/user/login',userController.loginController)
//get products
router.get('/product/get/:id',productController.getProductController)
//add to wishlist
router.get('/wishlist/add/:id',jwtMiddleware,wishlistController.addTowishlistController)

module.exports = router