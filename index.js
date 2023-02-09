function clock()
{ 
    var date = new Date();
    var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    var amorpm = hours >= 12 ? 'PM' : 'AM';
    var hours = hours > 12 ? hours-12 : hours; 
    document.getElementById("time3").innerHTML= hours;
    document.getElementById("time6").innerHTML= minutes;
    document.getElementById("time9").innerHTML= seconds;
    document.getElementById("am1").innerHTML= amorpm;  
    console.log(hours);
    console.log(amorpm);
}
setInterval(clock,1000);
settime();
function settime()
{
var waketext = document.getElementById("wakeup")
var value = waketext.options[waketext.selectedIndex].text;
document.getElementById("wakeuptimevalue").innerHTML= value;

var lunchtext = document.getElementById("lunchtime")
var value1 = lunchtext.options[lunchtext.selectedIndex].text;
document.getElementById("lunchtimevalue").innerHTML= value1;

var naptext = document.getElementById("naptime")
var value2 = naptext.options[naptext.selectedIndex].text;
document.getElementById("naptimevalue").innerHTML= value2;

var nighttext = document.getElementById("nighttime")
var value3 = nighttext.options[nighttext.selectedIndex].text;
document.getElementById("nighttimevalue").innerHTML= value3;

document.getElementById("image0").style.background=0;    
document.getElementById("caption").innerHTML= "";
document.getElementById("subtext0").innerHTML= "";

var date = new Date();
var hour0 = date.getHours();
// console.log(hour0);
var value=document.getElementById("wakeup").value;
if (hour0==value) {
    document.getElementById("image0").style.background="url(./images/wakeup_image.svg) no-repeat";        
    document.getElementById("caption").innerHTML="GRAB SOME HEALTHY BREAKFAST!!!";
    document.getElementById("subtext0").innerHTML="GOOD MORNING!! WAKE UP!!";       
}

// console.log(value);
var value1=document.getElementById("lunchtime").value;
if (hour0==value1) {
    document.getElementById("image0").style.background="url(./images/lunch_image.svg) no-repeat"; 
    document.getElementById("caption").innerHTML="LET'S HAVE SOME LUNCH !!";
    document.getElementById("subtext0").innerHTML="GOOD AFTERNOON!!";
}
var value2=document.getElementById("naptime").value;
if (hour0==value2) {
    document.getElementById("image0").style.background="url(./images/evening_image.png)  no-repeat";      
    document.getElementById("caption").innerHTML="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!!";
    document.getElementById("subtext0").innerHTML="GOOD EVENING !!"; 
}
var value3=document.getElementById("nighttime").value;
if (hour0==value3) {
    document.getElementById("image0").style.background="url(./images/night_image.svg) no-repeat";    
    document.getElementById("caption").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP";
    document.getElementById("subtext0").innerHTML="GOOD NIGHT !!";
}

}

