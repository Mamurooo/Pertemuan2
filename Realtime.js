setInterval(myTime, 1000);

function myTime() {
    const d = new Date();
    document.getElementById("Realtime").innerHTML = d.toLocaleTimeString();
}