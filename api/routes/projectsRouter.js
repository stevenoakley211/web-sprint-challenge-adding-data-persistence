const express = require('express');
const router = express.Router();
const projects = require('../schemes/projects-model')


// Post prjects
router.post('/',(req, res) => {
    const reqData = req.body;
        
    projects.add(reqData)
        .then(
            success => {
                res.status(200).json(success)
            }
        )
        .catch(error =>{
            res.status(500).json(
                    { error: error }
                )
        })
})
// Get Projects

router.get('/', (req, res) => {
    projects.find()
        .then( success => {
                res.status(200).json(success)
            }
        )
        .catch(error => {
            res.status(500).json(
                    { error: error }
                )
        })

})

module.exports = router