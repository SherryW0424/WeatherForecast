var startTime;
var checkTime;

var config = {cnt:0};
//Initialize function
var init = function () {

    document.onkeydown=function(event){

        

        switch(event.keyCode){
            //enter
            case 13:
                switch(config.cnt){
                    case 0: 
                        $('#hourShow1').show();
                        $('#hourShow2').show();
                        $('#dayShow').hide();
                        break;
                    case 1: 

                        $('#hourShow1').hide();
                        $('#hourShow2').hide();
                        $('#dayShow').show();
                        
                        break;
                    case 2: 
                        window.location.href='map.html';
                        break;
                }
                break;
            //left
            case 37:
                left();
                break;
            //up
            case 38:
                //up();
                break;
            //right
            case 39:
                right();
                break;
            //down
            case 40:
                //down();
                break;
        }
    }
    function left(){
        if(!config.cnt){

        } else {
            config.cnt--;
        }

        switch(config.cnt){
            case 0: 
                $("#hourf").css({
                    "background-color":"#0759b5"
                });
                $("#dayf").css({
                    "background-color": "#2981e4"
                });
                $("#changeCity").css({
                    "background-color":"#222"
                });
                break;
            case 1: 
                $("#dayf").css({
                    "background-color":"#0759b5"
                });
                $("#hourf").css({
                    "background-color":"#2981e4"
                });
                $("#changeCity").css({
                    "background-color":"#222"
                });
                break;
            case 2: 
                $("#changeCity").css({
                    "background-color":"#960505"
                });
                $("#dayf").css({
                    "background-color": "#2981e4"
                });
                $("#hourf").css({
                    "background-color":"#2981e4"
                });
                
                break;
        }

    }

    function right(){
        if(config.cnt == 2){

        }else{
            config.cnt++;
        }

        switch(config.cnt){
            case 0: 
                $("#hourf").css({
                    "background-color":"#0759b5"
                });
                $("#dayf").css({
                    "background-color": "#2981e4"
                });
                $("#changeCity").css({
                    "background-color":"#222"
                });
                break;
            case 1: 
                $("#dayf").css({
                    "background-color":"#0759b5"
                });
                $("#hourf").css({
                    "background-color":"#2981e4"
                });
                $("#changeCity").css({
                    "background-color":"#222"
                });
                break;
            case 2: 
                $("#changeCity").css({
                    "background-color":"#960505"
                });
                $("#dayf").css({
                    "background-color": "#2981e4"
                });
                $("#hourf").css({
                    "background-color":"#2981e4"
                });
                
                break;
        }
        
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