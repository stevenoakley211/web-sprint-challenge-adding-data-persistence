const express = require('express');
const router = express.Router();
const resources = require('../schemes/resources-model.js')

// Post resources
router.post('/',(req, res) => {
    const reqData = req.body;
        
    resources.add(reqData)
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
// Get resources
router.get('/', (req, res) => {
    
    resources.find()
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