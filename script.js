const degreeEl= document.getElementById("degree-el")
const temperatureEl=document.getElementById("temperature-el")
const resultEl=document.getElementById("result")
const convertBtn=document.getElementById("convert-btn")
convertBtn.addEventListener("click", function() {

    resultEl.textContent="Result: "

    if (degreeEl.value) {

        if(temperatureEl.value==="Celsius")
        {
            let inCelsius=((degreeEl.value -32 )*5/9).toFixed(2)
            resultEl.textContent+=inCelsius+" C"
            resultEl.style.color="white"
        } else{

            let inFahrenheit=((degreeEl.value * 1.8)+32).toFixed(2)
            resultEl.textContent+=inFahrenheit+" F"
            resultEl.style.color="white"
        }
    } else{
        resultEl.textContent+=("Degree element value is empty");
        resultEl.style.color="white"
    }
})
        