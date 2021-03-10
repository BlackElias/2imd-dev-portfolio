 
class App {
    constructor() {
       
	this.geo();
}

 geo(){
 navigator.geolocation.getCurrentPosition((position) => {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  console.log(lat);
  console.log(lng);
this.getWeather(lat, lng);

});
 }
getWeather(lat, lng){
  const params = {
    access_key: 'c32edf305c839b42e5dc85d81d0310ff',
    query: 'Zemst'
  }
  let url = `http://api.weatherstack.com/current ${params}`;
  fetch(url)
  .then(response => {
    const apiResponse = response.data;
    let temp = apiResponse.current.temperature;
    console.log(`Current temperature in Zemst is ${temp}℃`);
  }).catch(error => {
    console.log(error);
  

  //this.ad(temperature, text);
  });

//ad(temp, text );{


}



   
}
let app = new App();