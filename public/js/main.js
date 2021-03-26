const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_Name = document.getElementById("getOut");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");



const getInfo = async(event) =>{
    event.preventDefault()
    let cityVal = cityName.value;

    if(cityVal===""){
        city_Name.innerText = `please fillup your destination`;
    }else{
        try{

            let url =`http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=ba4d69411d06cb61dfa15d7e6bb0d422`;
            const response = await fetch(url);
            const data =await response.json();
           const arrData = [data];
           temp.innerText=`${arrData[0].main.temp}oC`
           city_Name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`
           temp_status.innerText=arrData[0].weather[0].main
        
           
        }catch{
          city_Name.innerText="samting wrong";
        }
    }
}

submitBtn.addEventListener("click",getInfo);