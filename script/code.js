// the button
let result = document.querySelector(`[result]`);

// button function
result.addEventListener('click', () => 
{
    // the values
    let weight = document.querySelector('[weight]').value 
    let height = document.querySelector('[height]').value

    // Calculation
    let bmi = (weight / ((height*height)/10000)).toFixed(2);

    // Display
    console.log(bmi);

    document.querySelector(`[output]`).innerHTML= bmi; 

})



