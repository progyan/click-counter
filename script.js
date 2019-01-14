let name = prompt('Oh, hi! What is your name?').toLowerCase();

if(name){
    let object;

    if(localStorage.getItem(name) != "NaN" && localStorage.getItem(name)){
        object = JSON.parse(localStorage.getItem(name));
        object.views++;
    } else {
        object = {clicks: 0, views: 1};
        localStorage.setItem(name, JSON.stringify(object));
    }

    let number = parseInt(localStorage.getItem('number'));
    document.getElementById('number').innerHTML = number;

    function increaseNumber(){
        number = ++document.getElementById('number').innerHTML;
        document.getElementById('number').innerHTML = number;
        localStorage.setItem('number', number.toString());
        object.clicks++;
        localStorage.setItem(name, JSON.stringify(object));
        if(number > 999){
            document.getElementById('number').style.fontSize = "20vw";
        }
        if(number > 9999999){
            document.getElementById('number').style.fontSize = "10vw";
        }
    }
} else {
    document.getElementById('number').innerHTML = 'Sorry, we can\'t show the number to you. Refresh the page and enter your name first.';
    document.getElementById('number').style.fontSize = "5vw";  
}