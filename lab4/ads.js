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
    
  
    



  //api key + cors vervangen elke 24uur
    let url2 = `https://cors-anywhere.herokuapp.com/https://euw1.api.riotgames.com/lol/match/v4/matchlists/by-account/FrBbYC9mwbuPXn3tJ6mX-p-TZOB261ZsbmmT2-3lFmZN1zA?api_key=RGAPI-0d836b85-0184-437c-b83e-0fdb33adc4f5`;
    console.log(url2);
    fetch(url2)
    .then((response) => {
      return response.json();
      
    }).then((json) =>{
      console.log(json)
      
      
      let text = json.totalGames;
    
      if (temp > 15) {
        this.hotAd(text);
      }else{
        this.coldAd(text);
      }
    });  
  });
  
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