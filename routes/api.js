const {getProductsResponse} = require("../services/productServices");

var express = require('express');
const {getProvincesResponse} = require("../services/provincesServices");
var router = express.Router();

/* GET home page. */
router.get('/',function (req,res,next) {
    res.send('Api ready');
})
router.post('/', async function(req, res, next) {
    let responseMessage = [];

    try{
        const body = req.body;
        if(body.queryResult.parameters.productName){
            responseMessage = await getProductsResponse(body);
            responseMessage = [...responseMessage,{
                "text": {
                    "text": [
                        `¿desea buscar otros productos?`
                    ]
                }
            }]
        }
        if(body.queryResult.parameters.provinceName){
            responseMessage = await getProvincesResponse(body);
        }
    }catch (error) {
        responseMessage = [{
            "text": {
                "text": [
                    "Ocurrió un error en el servidor, por favor intente de nuevo"
                ]
            }
        }]
    }

    await res.json({
        "fulfillmentMessages": responseMessage
    });
});

router.post('/products',function (req,res,next) {
   res.json({
       ...req.body,
       "fulfillmentMessages": [
           {
               "card": {
                   "title": "card title",
                   "subtitle": "card text",
                   "imageUri": "https://example.com/images/example.png",
                   "buttons": [
                       {
                           "text": "button text",
                           "postback": "https://example.com/path/for/end-user/to/follow"
                       }
                   ]
               }
           }
       ]
   });
});

router.post('/orderStatus',function (req,res,next) {
    res.json(req.body);
});

module.exports = router;
