var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('api ready');
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

module.exports = router;
