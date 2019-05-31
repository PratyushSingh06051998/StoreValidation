var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();


//jsonparser
var jsonParser = bodyParser.json();

//parsePOSTdata
var urlencoderParser = bodyParser.urlencoded({extended:false});

router.get('/' ,function(req, res, next) {
    res.render('formformat', { title: 'Store Validation' });
});

router.post('/',urlencoderParser ,function(req, res, next) {

    var data=[];

    data.push({name:"Site Manager Number",
    value:req.body.smno,
    type:"integer"});

    data.push({name:"HK Staff Number Number",
        value:req.body.hkno,
        type:"integer"});

    data.push({name:"SG Number",
        value:req.body.sgno,
        type:"integer"});

    data.push({name:"Number of Pantry Boys",
        value:req.body.pbno,
        type:"integer"});

    data.push({name:"Number of Lab Attendants",
        value:req.body.lano,
        type:"integer"});

    data.push({name:"Lab Manager Birthdate",
        value:req.body.lmbd,
        type:"date"});

    data.push({name:"Site Location",
        value:req.body.sl,
        type:"text"});

    data.push({name:"Site Manager Phone Number",
        value:req.body.smnum,
        type:"long"});

    data.push({name:"COL Name",
        value:req.body.colname,
        type:"text"});

    data.push({name:"COL Birthdate",
        value:req.body.colbd,
        type:"date"});

    data.push({name:"Area Supervisor Name",
        value:req.body.asname,
        type:"text"});

    console.log(data);

    res.send(JSON.stringify(data));
    res.end();
});

module.exports = router;
