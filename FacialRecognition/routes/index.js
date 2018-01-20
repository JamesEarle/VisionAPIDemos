var express = require('express');
var router = express.Router();

var NodeWebcam = require('node-webcam');

const opts = {
  width: 1280,
  height: 720,
  quality: 100,
  delay: 0,
  saveShots: true,
  output: "jpeg",
  device: false,
  callbackReturn: "location",
  verbose: false
}

/* GET home page. */
exports.index = router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

exports.snap = router.post('/snap', function (req, res, next) {
  var webcam = NodeWebcam.create(opts);
  webcam.capture('test-image', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
  res.render('index', { 
    title: "snapped"
  });
});

// module.exports = router;
