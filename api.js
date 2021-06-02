//Grabs the gif name from input
function grab() {
    var input = document.getElementById("search").value;
    pass(input)
}
document.getElementById("search").addEventListener('keyup', (e) => {
    if (e.which == 13) {
        var input = document.getElementById("search").value;
        pass(input)
    }
});

// API functions & stuff
function pass(input) {
    var url = "https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC&q=";
    var ajax = new XMLHttpRequest();
    ajax.open('GET', url);
    ajax.send();
    ajax.addEventListener('load', (e) => {
        console.log(e)
        var response = e.target.response
        display(response)
    });
}
// past the responses(giphy) on page 
function display(response) {
    response = JSON.parse(response)
    var gif = response.data

    var frame = document.getElementById("frame");
    frame.innerHTML = ""


    gif.forEach(function (item) {
        var imgsrc = item.images.fixed_height.url
        frame.innerHTML += " <img src= \"" + imgsrc + "\" >";
    });
}