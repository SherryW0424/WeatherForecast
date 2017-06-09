var startTime;
var checkTime;
var generateIdString;
var changeMap;

var config = {cnt:1};
var lastId = 1;
//Initialize function
var init = function () {

    document.onkeydown=function(event){

        

        switch(event.keyCode){
            //enter
            case 13:
                var idNow = generateIdString(config.cnt);
                var cityNow = $("#"+idNow).text();
                window.location.href='index.html?cityName=' + cityNow;
                break;
            //left
            case 37:
                left();
                break;
            //up
            case 38:
                up();
                break;
            //right
            case 39:
                right();
                break;
            //down
            case 40:
                down();
                break;
        }
    }
    function left(){
        if(config.cnt < 18){

        } else {
            lastId = config.cnt;
            config.cnt = config.cnt - 17;
        }

        changeMap();
        
    }

    function right(){
        if(config.cnt > 17){

        }else{
            lastId = config.cnt;
            config.cnt = config.cnt + 17;
        }

        changeMap();
        
    }

    function up(){
        if(config.cnt == 1 || config.cnt == 18){

        }
        else{
            lastId = config.cnt;
            config.cnt--;
        }

        changeMap();
    }

    function down(){
         if(config.cnt == 17 || config.cnt == 34){

        }
        else{
            lastId = config.cnt;
            config.cnt++;
        }
        changeMap();
        
    }

    // TODO:: Do your initialization job
    console.log("init() called");
    
    document.addEventListener('visibilitychange', function() {
        if(document.hidden){
            // Something you want to do when hide or exit.
        } else {
            // Something you want to do when resume.
        }
    });
 
    // add eventListener for keydown
    document.addEventListener('keydown', function(e) {
    	switch(e.keyCode){
    	case 37: //LEFT arrow
    		break;
    	case 38: //UP arrow
    		break;
    	case 39: //RIGHT arrow
    		break;
    	case 40: //DOWN arrow
    		break;
    	case 13: //OK button
    		break;
    	case 10009: //RETURN button
    		break;
    	default:
    		console.log("Key code : " + e.keyCode);
    		break;
    	}
    });
};
// window.onload can work without <body onload="">
window.onload = init;

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('divbutton1').innerHTML="Current time: " + h + ":" + m + ":" + s;
    t = setTimeout(startTime, 250);
}

function checkTime(i) {
    if (i < 10) {
        i="0" + i;
    }
    return i;
}

function generateIdString(id){
    if(id<10){
        return "city0" + id;
    }
    else {
        return "city" + id;
    }
}
function changeMap(){
    var idString = generateIdString(lastId);
    $("#"+idString).removeClass("cityActive");
    idString = generateIdString(config.cnt);
    $("#"+idString).addClass("cityActive");
    var cityNow = $("#"+idString).text();
    ChinaChart.setOption({
        series: [{
            type: 'map',
            map: 'china',
            selectedMode :'single',
            label:{
                normal:{
                    show:true
                },
                emphasis:{
                    textStyle:{
                        fontWeight:'bolder',
                        fontSize:'15'
                    }                    }
            },
             data:[
                {name: cityNow, selected:true},
            ]
        }]
    });
}