 
class App {
    constructor() {
       
	this.geo();
}

 geo(){
 navigator.geolocation.getCurrentPosition((position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log(latitude, longitude)
  this.getWeather( latitude, longitude);


});
 }
getWeather(latitude, longitude){
  console.log(latitude, longitude)
  let url = `http://api.weatherstack.com/current?access_key=c32edf305c839b42e5dc85d81d0310ff&query=${latitude},${longitude} `;//${latitude},${longitude}
  console.log(url);
  fetch(url)
  .then((response) => {
    return response.json();
    
  }).then((json) =>{
    console.log(json)
    
    let temp = json.current.temperature;
    console.log(`Current temperature in Zemst is ${temp}℃`);
  });
   

  

  //this.ad(temperature, text);
  

//ad(temp, text );{


}



   
}
let app = new App();