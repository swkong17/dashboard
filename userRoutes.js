//express modulee
const express = require('express');
const router = express.Router();
router.route('/reg/')
.get((req,res)=>{
    res.render('register')
})
.post(async(req,res)=>{

}
);

module.exports = router;