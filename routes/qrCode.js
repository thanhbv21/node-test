var express = require('express');
var router = express.Router();

const data = [{
    code: '123123',
    data: 'https://maqr.vn/XT72603377147'
}]

router.get('/:code', function(req, res, next) {
  let response;
  data.forEach(item => {
    if(item.code === req.params.code) 
        response = {
            "code": 200,
            "data": item.data
        };
  });

  response = (!response) ? { "code" : 400, "desc" : { "st1" : "SẢN PHẨM CHƯA ĐƯỢC BÁN RA THỊ TRƯỜNG", "st2" : "Xin quý khách cẩn thận!" } } : response;
  
  res.json(response);
});

module.exports = router;
