/**
 *
 * @authors Your Name (you@example.org)
 * @date    2020-06-09 21:19:43
 * @version $Id$
 */
const transactionUl = document.querySelector('#transactions')

const dummyTransactions = [
    { id: 1, name: 'Bolo de cenoura', amount: -20 },
    { id: 2, name: 'Salário', amount: 300 },
    { id: 3, name: 'Torta de frango', amount: -10 },
    { id: 3, name: 'Violão', amount: 150 }
]

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const cssClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWithoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')

li.classList.add(cssClass)
li.innerHTML = `
    ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
`
transactionUl.append(li)
}

const init = () => {
  dummyTransactions.forEach(addTransactionIntoDOM)
}
init()
