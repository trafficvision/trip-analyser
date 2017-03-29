const React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch: function (e) {
    e.preventDefault();

    var runId = this.refs.runId.value;

    var encodedRunId = encodeURIComponent(runId);

    if (runId.length > 0) {
      this.refs.runId.value = '';
      window.location.hash = '#/?runId=' + encodedQuery
    }
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">TrafficVision</li>
            <li>
              <IndexLink to="/" activeClassName="active">Create Report</IndexLink>
            </li>
            <li>
              <Link to="/help" activeClassName="active">Help</Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">About</Link>
            </li>
            <li>
              <Link to="/user" activeClassName="active">User</Link>
            </li>
            <li>
              <Link to="/test" activeClassName="active">Test</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
                <input type="search" placeholder="Enter Run ID" ref="runId"/>
              </li>
              <li>
                <input type="submit" className="button" value="Get Data"/>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
