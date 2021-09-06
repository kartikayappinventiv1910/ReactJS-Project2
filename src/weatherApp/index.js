import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [city, setCity] = useState();
  const [cityData,setCityData]=useState([]);
  const [showCard,setShowCard]=useState(false)
  const [weatherList] =useState([]);

  let temperature,humidity,pressure,windspeed,description;

  const apikey = "3265874a2c77ae4a04bb96236a642d2f";
  const url = (city) =>
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

  async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), { origin: "cors" });
    const respData = await resp.json();
    console.log(respData.main,"respData");
    setCityData(respData)
    // addWeatherToPage(respData);
  }

  function addWeatherToPage(data) {
    // const temp = KtoC(data.main.temp);
    console.log(data);
    // setCityData(data.main)

    let ktemp=data.main.temp;
    temperature=Math.floor(ktemp - 273.15)
    humidity=data.main.humidity;
    pressure=data.main.pressure;
    windspeed=data.wind.speed;
    let weatherstatus=data.weather[0];
    description=weatherstatus.description;
    console.log(description)
  }


  function handleSubmit(e) {
    e.preventDefault();
    if (city) {
      getWeatherByLocation(city);
      setShowCard(true);
    }
  }

  function DisplayCard (props) {
    {console.log(props.cityData,"props")}
    // const {temp,humidity,pressure} = props.cityData.main
    return(
      <div>
      {props.cityData &&   
      (<div>
        <p>temp={props.cityData.main.temp}</p>
        <p>humidity={props.cityData.main.humidity}</p></div>
        )  }
        
        {/* <p>windspeed={props.windspeed}</p> */}
        {/* <p>pressure={props.pressure}</p>
        <p>desc={props.description}</p> */}
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search by location"
          autocomplete="off"
        />
        <button type="submit">search</button>
        { showCard ?(
         
          <DisplayCard cityData={cityData && cityData}
          //  temperature={temperature} humidity={humidity} pressure={pressure}
          //   windspeed={windspeed} description={description}
          />):""}
      </form>
      
    </div>
  );
}

export default WeatherApp;

// const key = "API_KEY";
//   const [feels_like, setFeelsLike] = useState("");
//   const [mainTemp, setMainTemp] = useState("");
//   const [description, setDescription] = useState("");
//   const [main, setMain] = useState("");
//   const [iconID, setIconID] = useState("");
//   useEffect(() => {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=Karachi,pk&APPID=" +
//         key +
//         "&units=metric"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setFeelsLike(data.main.feels_like);
//         setMainTemp(data.main.temp);
//         setDescription(data.weather[0].description);
//         setMain(data.weather[0].main);
//         setIconID(data.weather[0].icon);
//       });
//   }, []);

{
  /* <h1>Main Temperature : {mainTemp} Degrees Celsius</h1>
      <h1>Feels like: {feels_like} Degrees Celsius</h1>
      <h1>Weather Parameter: {main}</h1>
      <h1>Description : {description}</h1>
      <img src={"http://openweathermap.org/img/wn/" + iconID + "@2x.png"} /> */
}
