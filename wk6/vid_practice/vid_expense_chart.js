/* Input elements */
let expenseNameInput = document.querySelector('#expense-name')
let expenseAmountInput = document.querySelector('#expense-amount')
let addExpenseButton = document.querySelector('#add-expense')

/* Get chart canvas and contex  */
let chartCanvas = document.querySelector('#expenses-doughnut-chart')
let ctx = chartCanvas.getContext('2d')  // 'ctx' is abbrev. for 'context'

/* Chart object -- empty lists b/c user will input data */
let expenseChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [ {
                data: [],  // amount
                backgroundColor: []
            } ],
        labels: []  // name
    },
    options: {}
})

let chartColors = [ 'tomato', 'orange', 'dodgerblue', 'mediumseagreen', 'slateblue', 'violet' ]

/* Add input to chart */
function addExpenseToChart(name, amount) {

    expenseChart.data.labels.push(name)
    expenseChart.data.datasets[0].data.push(amount)

    let colorCount = expenseChart.data.datasets[0].backgroundColor.length
    let color = chartColors[ colorCount % chartColors.length ]  // modulo returns remainder

    expenseChart.data.datasets[0].backgroundColor.push(color)

    expenseChart.update()

}

/* Get, validate input */
addExpenseButton.addEventListener('click', function() {

    let errors = []

    let expenseName = expenseNameInput.value
    let expenseAmount = expenseAmountInput.value

    // Validate both fields are filled in, and the amount is a positive number
    if (expenseName.length == 0) {
        errors.push('Enter a type of expense')
    }

    if (expenseAmount.length == 0 || expenseAmountInput < 0) {
        errors.push('Enter a positive amount for the expense')
    }

    // If any errors, alert and return - do not procede to add to chart
    if (errors.length > 0) {
        alert( errors.join('\n') )
        return
    }

    // call function to update chart
    addExpenseToChart(expenseName, expenseAmount)

    // Clear inputs, ready for next expense name and amount.
    expenseNameInput.value = ''
    expenseAmountInput.value = ''

})

/* Allows user to input with enter key */
window.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 || event.key === 'Enter') {
        let inputElement = [expenseNameInput, expenseAmountInput, addExpenseButton]
        if ( inputElement.includes(document.activeElement) ) {
            addExpenseButton.click()
            expenseNameInput.focus()  // moves input back to name input
        }
    }
})
