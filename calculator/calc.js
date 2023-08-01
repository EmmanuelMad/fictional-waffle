let principal = document.querySelector(".principal")
let rate = document.querySelector(".rate")
let time = document.querySelector(".time")
let calc_btn = document.querySelector(".calc_btn")
let amount = document.querySelector(".amount")
let principal_value = principal.value
let rate_value = rate.value
let time_value = time.value
console.log(calc_btn)
calc_btn.addEventListener("click", calculate)

function calculate(event){
    let interest = ((principal.value*rate.value*time.value)/100)
    // console.log(principal.value,rate.value,time.value)
    let amount_value = principal.value + interest
    amount.textContent = amount_value
    console.log(amount_value,interest)
}
calculate()
// console.log(principal,rate,time)