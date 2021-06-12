/* 
Kiekviena užduotis turi būti aprašyta kaip atskira funkcija
kuriai yra paduodami duomenys. Aprašykite visas funkcijas žemiau. 
Visas funkcijas iškvieskite vieną po kitos, žemiau šio komentaro.

Taip pat parašykite funkciją kuri: isikviesdama save pačią atspausdina skaičius nuo 1 iki 10

*/
firstCountItems (data.length);
secondCountKaunasItems (data); //nesuprantu, kodėl neveikia
// countKaunasmeniu (data);

function firstCountItems(data) {
    console.log(data); //duomenų atvaizdavimas
    let item = [];
    
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(data.length);
        
    }
}
// Filtruojame duomenis
function secondCountKaunasItems(data) {
    let count = 0;
    data.forEach(kavine =>{
        if (kavine.adresas.toLowerCase().includes('kaunas')) {
            count++;
        }
    })
    console.log(count);
}

// countKaunasmeniu (data)




function rekursija(counter) {
    if (counter > 0) {
        rekursija(counter - 1);
    }
    console.log(counter);
};



var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "The result is a tie!";
}
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    }
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper wins";
    } else {
        if(choice2 === "scissors") {
            return "scissors wins";
    }
}
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        return "rock wins";
    } else {
        if(choice2 === "paper") {
            return "scissors wins";
        }
    }
}
}
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
compare(userChoice, computerChoice);

