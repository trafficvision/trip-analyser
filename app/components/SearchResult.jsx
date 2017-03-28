var React = require('react');
var {Bar, Doughnut} = require('react-chartjs-2');

var Chart = require('Chart');
var Map = require('Map');
var Stats = require('Stats');

var SearchResult = React.createClass({
  render: function () {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
    return (
      <div>
        <h3 className="text-center">Result will go here!!!!</h3>
        <Stats>What about this????</Stats>
        <Chart />
        <Map />
      </div>
    );
  },
});

module.exports = SearchResult;
