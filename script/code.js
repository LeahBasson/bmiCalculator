function result() {
    let numb1 = document.querySelector('[numb1]').value 
    let operator = document.querySelector('[operator]').value 
    let numb2 = document.querySelector('[numb2]').value
   // Output reference
    let output = document.querySelector('[output]')
    output.textContent = eval(`${numb1} ${operator} ${numb2}`) 
}