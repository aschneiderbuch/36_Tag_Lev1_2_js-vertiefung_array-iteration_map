console.log("test");


/* 
map()

Variable upperDrinks
        alle in Großbuchstaben


        dann in ArrowFunction umwandeln
*/


let getraenke = [
    "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
]


// function getraenke
function upperDrinks() {
    getraenke.sort()
    getraenke.map((element) => {
        const body = document.querySelector("body")
        body.innerHTML += `${element.toUpperCase()} --> </br> `
        console.log(element.toUpperCase())
    })


}


upperDrinks();

// Arrow functions
const newGetränke = () => { 
    
    getraenke.map((element) => {
    const body = document.querySelector("body")
    body.innerHTML += `${element.toUpperCase()}, <br> `
    console.log(element.toUpperCase())
})}


newGetränke()
newGetränke()
newGetränke()