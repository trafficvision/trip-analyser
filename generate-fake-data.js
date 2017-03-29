var moment = require('moment');
var uuid = require('uuid');
// W 10th and Alma      49.263479, -123.185941
// W 10th and MacKenzie 49.263244, -123.170126

var lat = 49.263479;
var lng = -123.185941;

var lat_delta = (49.263244 - 49.263479) / 10.0;
var lng_delta = (-123.170126 - -123.185941) / 10.0;

var time = moment().unix()

var run = {
  runId: uuid(),
  userId: "Quan",
  runStartTime: time,
  tripPathID: 111,
  startCoordinate: {
    lat: lat,
    lng: lng
  }
};

var datapoints = [];

for(var count = 0; count < 10; count++){
  datapoints.push({
    timestamp: time,
    coordinate: {
      lat: lat,
      lng: lng
    },
    speed: 100
  });
  time = time + 10;
  lng = lng + lng_delta;
  lat = lat + lat_delta;
}

run.datapoints = datapoints;
run.runEndTime = time;
run.endCoordinate = {
  lat: lat,
  lng: lng
};

export var fakeRun = run;
