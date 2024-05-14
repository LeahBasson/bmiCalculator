let result = document.querySelector(`[result]`)
result.addEventListener('click', () => 
{

    let weight = document.querySelector('[weight]').value 
    let height = document.querySelector('[height]').value

    let bmi = (weight / ((height*height)/10000)).toFixed(2);

    console.log(bmi);

    document.querySelector(`[output]`).innerHTML= bmi;

})



