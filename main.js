const key_api = "4dea31cd3e71dcca5a678a1d04b62f5a";

const button = document.getElementById("btn");

function putDataScreen(api_request){
    console.log(api_request);

    document.getElementById("cidade").innerHTML = `Tempo em ${api_request.name}`
    document.getElementById("temp").innerHTML = `Temperatura-> ${Math.floor(api_request.main.temp)}°C`
    document.getElementById("clima").innerHTML = api_request.weather[0].description
}
async function searchCity(input_query){
    try {
        const api_request = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
        input_query + 
        "&appid=" + 
        key_api + 
        "&lang=pt_br" +
        "&units=metric"
        );

        if (!api_request.ok) {
            throw new Error('Failed to fetch');
        }

        const data = await api_request.json();
        putDataScreen(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function btnAction(){
    const input_query = document.getElementById("city_query").value;
    searchCity(input_query);
}

button.addEventListener("click", btnAction);
