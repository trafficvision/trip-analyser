var axios = require('axios');
import firebase from 'firebase';

// usage:
// firebaseAPI.addRun(run);
// firebaseAPI.getRun(runId).then((run) => {
//   console.log(run);
// }, (e) => {
//   console.log('unable to fetch', e);
// });

// Initialize Firebase
var config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

// {"runId":54, "x":20,"y":15}

module.exports = {
  addRun: function (run) {
    let {runId, ...runData} = run;
    let {datapoints, ...runJSON} = runData;

    firebaseRef.child("runs").child(runId).set(runJSON).then(() => {
      console.log('set worked');
      return true;
    }, (e) => {
      console.log('set failed');
      return e;
    });

    datapoints.forEach(function(datapoint) {
      let {timestamp, ...datapointData} = datapoint;
      firebaseRef.child("runs").child(runId).child("datapoints").child(timestamp).set(datapointData).then(() => {
        console.log(".");
        return true;
      }, (e) => {
        console.log('set failed');
        return e;
      });
    });

  },
  getRun: function (runId) {
    firebaseRef.child("runs").child(runId).once('value').then((snapshot) => {
      console.log('Got data ', snapshot.val());
      return snapshot.val();
    }, (e) => {
      console.log('unable to fetch', e);
      return e;
    });
  },
  removeRun: function (runId) {
    firebaseRef.child("runs").child(runId).set(null).then(() => {
      console.log('remove worked');
      return true;
    }, (e) => {
      console.log('remove failed');
      return e;
    });
  },
};
