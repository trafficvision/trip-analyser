var React = require('react');

var SearchForm = React.createClass({
  onFormSubmit: function(e) {
    e.preventDefault();

    var query = this.refs.runID.value;

    if (runID.length > 0) {
      this.refs.runID.value = '';
      this.props.onNewSearch({runID: runID});
    }
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="search" placeholder="Enter Run ID" ref="runID"/>
          </div>
          <div>
            <input type="search" placeholder="Enter User ID" ref="runID"/>
          </div>
          <div>
            <input type="search" placeholder="Enter Start Date" ref="runID"/>
          </div>
          <div>
            <input type="search" placeholder="Enter Start Time" ref="runID"/>
          </div>
          <div>
            <input type="search" placeholder="Enter End Date" ref="runID"/>
          </div>
          <div>
            <input type="search" placeholder="Enter End Time" ref="runID"/>
          </div>
          <div>
            <input type="search" placeholder="Include Flagged" ref="runID"/>
          </div>
          <div>
            <button className="button expanded hollow">Get Data</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = SearchForm;
