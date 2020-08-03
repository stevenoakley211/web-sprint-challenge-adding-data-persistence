const express = require('express');
const router = express.Router();
const tasks = require('../schemes/tasks-model.js')

// Post tasks
router.post('/',(req, res) => {
    const reqData = req.body;
        
    tasks.add(reqData)
        .then(
            success => {
                res.status(200).json(success)
            }
        )
        .catch(error =>{
            res.status(500).json(
                    { error: error,
                        message:error.message }
                )
        })
})
// retrive a list of tasks the list of tasks should include the project name and project description
router.get('/', (req, res) => {
    
    tasks.find()
        .then( success => {
                res.status(200).json(success)
            }
        )
        .catch(error => {
            res.status(500).json(
                    { error: error,
                    message:error.message }
                )
        })
    
})
module.exports = router