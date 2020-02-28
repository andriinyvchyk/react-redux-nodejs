const express = require('express');
const router = express.Router();
const Users = require('../models/modelUsers')
const cors = require('cors')
router.use(cors())

router.get('/', cors(), (req, res) => {
    console.log('запрос')
    const docs = [

        {
            login: 'asdasda'
        }
    ]
    res.send(docs);
})
router.post('/', cors(), async (req, res) =>{
    const emp = new Users({
        'email': req.body.email,
        'password': req.body.password
    });
    await emp.save();
})

module.exports = router;