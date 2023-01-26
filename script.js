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
    {
        img: "photo/7.jpg",
        name: "Art 7",
        price : "1000$"
    },
    {
        img: "photo/8.jpg",
        name: "Art 8",
        price : "1000$"
    },
    {
        img: "photo/9.jpg",
        name: "Art 9",
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
    const btn = document.createElement("button");

    newH2.appendChild(name_of_art);
    newP.appendChild(price_of_art);
    btn.innerText ="buy";
    let click = 1;
    btn.addEventListener("click", function(){
        if(click == 1) {
            boxplus.innerHTML++
            btn.style.cssText = "background-color: rgb(9, 139, 9, 0.7)";
            click = 0;
          } else {
            boxplus.innerHTML--
            btn.style.cssText = "";
            click = 1;
          }
    });
    const boxplus = document.getElementById("carticon")
    newIMG.src = img;

    newDiv.append(newIMG, newH2, newP, btn);

    newDiv.className = "box"
    btn.className = "plus"
    const currentDiv = document.getElementById("container");
    currentDiv.appendChild(newDiv);



}

for(let i = 0; i < art.length; i ++){
    addProduct(art[i].name, art[i].price, art[i].img)
}

