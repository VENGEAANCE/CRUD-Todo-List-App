//Handles initial GET request for the home page
//Handles POST method for tdding a new task

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

//add specific routes for specific tasks

router.get('/', homeController.getIndex)
router.post('/', homeController.createTask)

module.exports = router