console.log('app.js');

window.onload = function() {

  var ctx = document.querySelector('#temperatures');
  console.log(ctx);

  var btn = document.getElementById('temp-submit');
  var inp = document.getElementById('temp-input');

  // .value

  btn.addEventListener('click', function() {
    console.log('workssssssss!!!!!!');
    console.log('input value: ', inp.value);

    fetch('http://localhost:3000/locations/1/temperatures', {
      method: 'post',
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: "temperature[average_high_f]=" + inp.value
    })
    .then(function(response) {
      return response.json()
    }).then(function(data) {
      console.log('Stuff back from the server: ', data);

      renderChart();

    });
  });

  var chartData = {
    labels: [],
    datasets: [
      {
        label: 'Avg high temps',
        data: []
      },
      {
        label: 'Avg low temps',
        data: []
      }
    ]
  }

  var renderChart = function() {
      fetch('http://localhost:3000/locations/1/temperatures')
        .then(function(response) {
          return response.json();
        }).then(function(data) {
          console.log(data);

          chartData.labels = [];
          chartData.datasets[0].data = [];
          chartData.datasets[1].data = [];

          data.forEach(function(temperature) {
            console.log(temperature.average_high_f);
            chartData.labels.push(temperature.id);
            chartData.datasets[0].data.push(temperature.average_high_f);
            chartData.datasets[1].data.push(temperature.average_low_f);
          });

          var tempsChart = new Chart(ctx, {
            type: 'line',
            data: chartData
          });
        });
  };
  //
  renderChart();


} // end window onload
