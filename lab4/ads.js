 
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
  let url = 'http://api.weatherstack.com/current?access_key=c32edf305c839b42e5dc85d81d0310ff&query=Zemst&units=m';
  fetch(url)
  .then(response => response.json())
  .then(data => console.log(data));
  };




   
}
let app = new App();