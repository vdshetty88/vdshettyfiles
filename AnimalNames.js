var selectAnimals = document.getElementById("selectAnimals");
var message = document.getElementById("message");

//Array elements
arr = ["Monkey", "Lion", "Dog", "Cat", "Fish", "Shark", "Mouse", "Turtle", "Snake", "Kangaroo"];

//Adds all the elements of the array into the selection box
for (var i = 0; i < arr.length; i++)
{
    var option = document.createElement("OPTION"),
    txt = document.createTextNode(arr[i]);
    option.appendChild(txt);
    selectAnimals.insertBefore(option, selectAnimals.lastChild);
}

//Changes message based on click of each button
selectAnimals.addEventListener("click", function() {
    var index = selectAnimals.selectedIndex;
    if (index == 1){
        document.getElementById("message").innerHTML = "A Monkey has a very long tail and likes bananas."
    }
    else if (index == 2){
        document.getElementById("message").innerHTML = "A Lion is the king of the jungle."
    }
    else if (index == 3){
        document.getElementById("message").innerHTML = "A Dog is a man's best friend, and has been domesticated from wolves!"
    }
    else if (index == 4){
        document.getElementById("message").innerHTML = "Cats are quiet animals that are rumored to have 9 lives!"
    }
    else if (index == 5){
        document.getElementById("message").innerHTML = "A Fish lives in the water, and has gills instead of lungs."
    }
    else if (index == 6){
        document.getElementById("message").innerHTML = "Sharks are much larger predatory fish, and are the kings of the ocean."
    }
    else if (index == 7){
        document.getElementById("message").innerHTML = "A mouse is a very small rodent that enjoys eating cheese."
    }
    else if (index == 8){
        document.getElementById("message").innerHTML = "Turtles are very slow animals that have hard shells protecting them."
    }
    else if (index == 9){
        document.getElementById("message").innerHTML = "Snakes are long and narrow animals that can be venomous."
    }
    else if (index == 10){
        document.getElementById("message").innerHTML = "Kangaroos live in Australia, and have power legs to jump."
    }
});



