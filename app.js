function time(){
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    var mils = d.getMilliseconds();

    document.getElementById("time").innerHTML = hours + ":" + mins +  ":" + secs + ":" + mils;
}
setInterval(time);