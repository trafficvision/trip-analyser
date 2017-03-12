const React = require('react');
var SearchResult = require('SearchResult');
var SearchForm = require('SearchForm');
var firebaseAPI = require('firebaseAPI');
var ErrorModal = require('ErrorModal');

var Report = React.createClass({
  getInitialState: function () {
    return {
      loading: false,
    };
  },
  handleNewSearch: function (queryObj) {
    this.setState({
      loading: true,
      errorMessage: undefined,
    });

    // firebaseAPI.getData(query).then(
    //   (data) => {
    //     this.setState({
    //       loading: false,
    //       errorMessage: undefined,
    //     });
    //   }, (error) => {
    //     this.setState({
    //       loading: false,
    //       errorMessage: error.message
    //     });
    //   });
  },
  // componentDidMount: function () {
  //   var runId = this.props.location.query.runId;
  //   if (runId && runId.length > 0) {
  //     this.handleNewSearch({runId: runId});
  //     window.location.hash = '#/';
  //   }
  // },
  // componentWillReceiveProps: function (newProps) {
  //   var runId = newProps.location.query.runId;
  //   if (runId && runId.length > 0) {
  //     this.handleNewSearch(runId);
  //     window.location.hash = '#/';
  //   }
  // },
  render: function () {
    var {loading, errorMessage} = this.state;

    function renderResult () {
      if (true) {
        return (
          <div>
            <h3 className="text-center">Getting weather data...</h3>
            <SearchResult/>
          </div>
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Generate Report</h1>
        <SearchForm onNewSearch={this.handleNewSearch}/>
        {renderResult()}
      </div>
    );
  }
});

module.exports = Report;
