const ad_img = document.querySelector(".ad_img");
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
    const text = json.totalGames;
    this.ad(temp);
  });
  //api key + cors vervangen elke 24uur
    let url2 = `https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/FrBbYC9mwbuPXn3tJ6mX-p-TZOB261ZsbmmT2-3lFmZN1zA?api_key=RGAPI-ae6fcb54-1c2c-4007-b44b-f05d5c4a975c`;
    console.log(url2);
    fetch(url2)
    .then((response) => {
      return response.json();
      
    }).then((json) =>{
      console.log(json)
      
      
      
     
  });
  
}
  

ad(temp, text){
if(temp < 5){
  
  this.coldAd(text);
  }else{
    this.hotAd(text);
  }
}

coldAd( text ){
   const ad_img = document.querySelector(".ad_img");
   console.log(`Current text ${text}`);
  ad_img.style.display = "inline-block";
    document.getElementById("ad_title").innerHTML=`You played ${text} games <br> Go play some more!` ;
 
    }
 hotAd( text ){
      const ad_img2 = document.querySelector(".ad_img2");
     console.log(`Current text2 ${text}`);
     ad_img2.style.display = "block";
       document.getElementById("ad_title2").innerHTML=`You played ${text} games <br> Go outside` ;
    
       }

  



}
let app = new App();