var express = require('express');
var router = express.Router();

var data = [
  { "label": 1, "value": "Singapore" },
  { "label": 2, "value": "Malaysia" },
  { "label": 3, "value": "Indonesia" },
  { "label": 4, "value": "Phillipens" },
  { "label": 6, "value": "Thailand" },
  { "label": 7, "value": "India" },
  { "label": 8, "value": "Canada" },
  { "label": 9, "value": "Brazil" },
  { "label": 10, "value": "New Zealand" }
]

/* GET Countries listing. */
router.get('/', function(req, res) {
 
  
  res.json(data);
});

router.post('/add', function(req, res){
  console.log(data.length+1);
  let newobject = {"label":data.length + 1,"value": req.body[0] };
  data.push(newobject);
  console.log(data);
  res.json(data);
})

module.exports = router;

