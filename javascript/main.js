/* 
Kiekviena užduotis turi būti aprašyta kaip atskira funkcija
kuriai yra paduodami duomenys. Aprašykite visas funkcijas žemiau. 
Visas funkcijas iškvieskite vieną po kitos, žemiau šio komentaro.

Taip pat parašykite funkciją kuri: isikviesdama save pačią atspausdina skaičius nuo 1 iki 10

*/
firstCountItems (data.length);
secondCountKaunasItems (); //nesuprantu, kodėl neveikia

function firstCountItems(data) {
    console.log(data); //duomenų atvaizdavimas
    let item = [];
    
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(data.length);
        
    }
}
// Filtruojame duomenis
function secondFilterKaunasItems(data) {
    let countKaunas = arrayOfObject.filter(function(obj){
        //loop through each object
        for(key in obj){
          //check if object value contains value you are looking for
          if(obj[key].includes('Kaunas')){
            //add this object to the filtered array
            return obj;
            }
           }
          });
            
      console.log(countKaunas);
}
    




function rekursija(counter) {
    if (counter > 0) {
        rekursija(counter - 1);
    }
    console.log(counter);
};
