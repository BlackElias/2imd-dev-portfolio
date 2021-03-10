 
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


});
 }




   
}
let app = new App();