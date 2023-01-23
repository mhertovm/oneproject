const art = [
    {
        img: C:\Users\BEST\Desktop\Relq\one\img\logo.png,
        name: "name",
        price: 22,
    },
    {
        img: C:\Users\BEST\Desktop\Relq\one\img\shoppingcart.jpg;
        name: "art2",
        price: 32,
    },
]
function addProduct(img, name, price) {
    const name_of_art = document.createTextNode(name);
    const price_of_art = document.createTextNode(price);

    const newDiv = document.createElement("div");
    const newH2 = document.createElement("h2");
    const newP = document.createElement("p");
    const newIMG = document.createElement("img");

    newH2.appendChild(name_of_art);
    newP.appendChild(price_of_art);
    newIMG.src = img;
    newDiv.append(newIMG, newH2, newP);

    newDiv.style.cssText = "padding: 15px; border: solid; width:18%; heigth: auto; display: inline-block;";
    newDiv.className = "box"

    const currentDiv = document.getElementById("container");
    currentDiv.appendChild(newDiv);
}
for(let i = 0; i < art.length; i ++){
    addProduct(art[i].name, art[i].price, art[i].img)
}