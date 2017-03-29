const React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import firebaseAPI from 'firebaseAPI';

var fakeRun = require('fakeRun');

export var Test = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var testData = this.refs.testData.value;

    if (testData.length > 0) {
      this.refs.testData.value = '';
      if (testData === "add fake"){
        console.log("adding fake data: ");
        console.log(fakeRun.fakeRun);
        firebaseAPI.addRun(fakeRun.fakeRun);
      } else {
        firebaseAPI.addRun(testData);
      }
    }

    var runIdv = this.refs.runIdv.value;

    if (runIdv.length > 0) {
      this.refs.runIdv.value = '';
      firebaseAPI.getRun(runIdv);
    }

    var runIdr = this.refs.runIdr.value;

    if (runIdr.length > 0) {
      this.refs.runIdr.value = '';
      firebaseAPI.removeRun(runIdr);
    }

  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" ref="testData" placeholder="Enter raw data to be added to database"/>
          <input type="text" ref="runIdv" placeholder="Enter run id to view"/>
          <input type="text" ref="runIdr" placeholder="Enter run id to remove"/>
          <button className="button expanded">Send</button>
        </form>
      </div>
    );
  }
});

export default connect()(Test);


// W 10th and Alma      49.263479, -123.185941
// W 10th and MacKenzie 49.263244, -123.170126
