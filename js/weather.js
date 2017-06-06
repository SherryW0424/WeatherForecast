function checkWeather() {
    document.getElementById('divbutton2').innerHTML=jsonObject.HeWeather5[0].basic.city;
}

function loadScript(url) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
    console.log(url);
}