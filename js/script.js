const carouselArr = [
    {
        title: "Marvel's Spiderman Miles Morales",
        description: "Experience of Miles Morales as the new Hero masters incredible, explosive new powers to become his own Spider-Man",
        img: "01.webp"
    },
    {
        title: 'Ratchet & Clank: Rift Apart',
        description: "Experience of Miles Morales as the new Hero masters incredible, explosive new powers to become his own Spider-Man",
        img: "02.webp"
    },
    {
        title: 'Fortnite',
        description: "Experience of Miles Morales as the new Hero masters incredible, explosive new powers to become his own Spider-Man",
        img: "03.webp"
    },
    {
        title: 'Stray',
        description: "Experience of Miles Morales as the new Hero masters incredible, explosive new powers to become his own Spider-Man",
        img: "04.webp"
    },
    {
        title: "Marvel's Avengers",
        description: "Experience of Miles Morales as the new Hero masters incredible, explosive new powers to become his own Spider-Man",
        img: "05.webp"
    }
]



const imgContainer = document.getElementById('imgs-container');

let itemsContent = '';

carouselArr.forEach((elem) => {
    itemsContent += `<div class="item">
    <img src="./img/${elem.img}">
    <div class="item-description">
    <h2>${elem.title}</h2>
    <p>${elem.description}</p>
    </div>
    </div>`
})

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;



/* imgContainer.forEach((elem) => {

}) */





items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){
    //verifico l'elemento attivo (itemActive)
    //incremento il suo valore di 1
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    //stessa cosa per i cerchi
    if(itemActive<4){
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        itemActive++;
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        
    } else if(itemActive==4){
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        itemActive = 0
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
    } 
    
    
    
});

prev.addEventListener('click', function(){
    //verifico l'elemento attivo (itemActive)
    //decremento il suo valore di 1
    //aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
    //stessa cosa per i cerchi
    if(itemActive>0){
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        itemActive--;
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        
    } else if(itemActive==0){
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        itemActive = 4
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        
    } 
})

/* autoplay carousel */

function autoplaySlider(){
    if(itemActive<4){
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        itemActive++;
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
        
    } else if(itemActive==4){
        items[itemActive].classList.remove('active');
        circles[itemActive].classList.remove('active');
        itemActive = 0
        items[itemActive].classList.add('active');
        circles[itemActive].classList.add('active');
    } 
}


let myInterval = setInterval(autoplaySlider, 3000);

/* autplay button */

const autoplayButton = document.getElementById('autoplay-button');
let autoplayButtonState = true;

autoplayButton.addEventListener('click', function(){
    if(autoplayButtonState){
        autoplayButtonState = false;
        clearInterval(myInterval);
    } else {
        autoplayButtonState = true;
        myInterval = setInterval(autoplaySlider, 3000);
    }
})



carouselArr.forEach((elem, id) =>{
    let sideImg = document.createElement('img');
    sideImg.src = `./img/${elem.img}`;
    sideImg.classList.add('shadow');
    console.log(sideImg.classList)
    imgContainer.appendChild(sideImg);
    if(itemActive == id){
        sideImg.classList.remove('shadow')
    }
})