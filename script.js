function changeText() {
    var textsArray = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"]
    
    var randomNo = getRandomNumberBetween(0, textsArray.length - 1)
    console.log("Index: ", randomNo)
    document.getElementById("header").innerHTML = textsArray[randomNo];
}

function getRandomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
