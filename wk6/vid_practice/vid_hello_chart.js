let canvas = document.querySelector('#soda-chart')
let ctx = canvas.getContext('2d')  // 'ctx' is common abbrev. for 'context'

let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Coke', 'Pepsi', 'Either', 'Neither'],
        datasets: [{
            label: 'Number of votes',
            data: [18, 12, 6, 8],
            backgroundColor: ['red', 'blue', 'purple', 'darkgray']
        }]
    },
    options: {
        scales: {  // no longer needed for current ChartJS -- entered for practice :)
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})