const art = [
    {
        img: "photo/1.jpg",
        name: "Art 1",
        price : "1000$"
    },
    {
        img: "photo/2.jpg",
        name: "Art 2",
        price : "1000$"
    },
    {
        img: "photo/3.jpg",
        name: "Art 3",
        price : "1000$"
    },
    {
        img: "photo/4.jpg",
        name: "Art 4",
        price : "1000$"
    },
    {
        img: "photo/5.jpg",
        name: "Art 5",
        price : "1000$"
    },
    {
        img: "photo/6.jpg",
        name: "Art 6",
        price : "1000$"
    },
]

function addProduct(name, price,img) {

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
    newDiv.style.cssText = "padding: 20px; width:28%; display: inline-block;";
    newDiv.className = "box"
    const currentDiv = document.getElementById("container");
    currentDiv.appendChild(newDiv);
}

for(let i = 0; i < art.length; i ++){
    addProduct(art[i].name, art[i].price, art[i].img)
}
