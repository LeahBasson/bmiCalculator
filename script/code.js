let result = document.querySelector(`[result]`)
result.addEventListener('click', () => 
{

    let weight = document.querySelector('[weight]').value 
    let height = document.querySelector('[height]').value

    let bmi = (weight / ((height*height)/10000)).toFixed(2);

    if(bmi<= 18.4){
        document.querySelector(`[output]`).innerHTML = 'Underweight : ' + bmi;
    }
    else if (bmi >= 18.5 && bmi < 24.9 ){
        document.querySelector(`[output]`).innerHTML = 'Normal : ' + bmi;  
    }
    else if (bmi >= 25.0 && bmi < 39.9){
        document.querySelector(`[output]`).innerHTML = 'Overweight : ' + bmi;  
    }
    else if (bmi >= 40.0){
        document.querySelector(`[output]`).innerHTML = 'Obese : ' + bmi;  
    }

})



