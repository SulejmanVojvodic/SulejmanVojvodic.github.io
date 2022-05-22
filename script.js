// responsive meni za mobilne uređaje, mijenja se izgled menija
const mobileMenu = () => {
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('.header button')

    if (btn.innerText === 'MENU') {
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    } else {
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
}

// slajder sa slikama, da možemo mijenjati slike pomoću
// strelica

let rightbtn = document.querySelector('#right-btn');
let leftbtn = document.querySelector('#left-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0; //pamtimo da nam je prva slika na 0toj poziciji

// funkcija koja ce nam sakriti slike
const sakrij = () => {
    pictures.forEach((img) => {
        img.style.display = 'none';
    });

}
//  desnim klikom mjenjamo slike tj. povecavamo slike za jedan
// i kada dodjemo do zadnje vraca nas na prvu opet
rightbtn.addEventListener('click', () => {
    sakrij();
    imgNum++;
    if (imgNum == pictures.length) {
        imgNum = 0;
    }
    pictures[imgNum].style.display = 'block';
})

// lijevim klikom mjenjamo slike tj. smanjujemo slike za jedan
// i kada dodjemo do zadnje vraca nas na prvu opet
leftbtn.addEventListener('click', () => {
    sakrij();
    imgNum--;

    if (imgNum === -1) {
        imgNum = pictures.length - 1;
    }
    pictures[imgNum].style.display = 'block';
})

// offeri
// button stavljamo jer moramo znati koje je dugme kliknuto


const offerSort = (button) => {
    let category = button.getAttribute('data-category');
    let offerItems = document.querySelectorAll('.offer-single-item');

    offerItems.forEach((item) => {
        item.style.display = 'none';
    });

    if (category === 'sve') {
        offerItems.forEach((item) => {
            item.style.display = 'block';
        })
    }

    offerItems.forEach((item) => {
        if (item.getAttribute('data-category').includes(category)) {
            item.style.display = 'block';
        }
    })
}

//otvaramo popup prozor

const openModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'block';
    overlay.style.display = 'block';

}

// zatvaramo popup prozor
const closeModal = () => {
    let modalWindow = document.querySelector('.popup-modal');
    let overlay = document.querySelector('.overlay');

    modalWindow.style.display = 'none';
    overlay.style.display = 'none';

}
/*
var sviProizvodi;
popuniPodatke = (data) => {
    for (let i = 0; i < data.length; i++) {

        //dodavanje reda u tabelu
        let red = document.createElement("tr");
        document.getElementById("podaciTabela").appendChild(red);

        //dodavanje celije sa ID
        let IDproizvoda = document.createElement("td");
        red.appendChild(IDproizvoda);
        IDproizvoda.innerHTML = data[i].id;
        //dodavanje celije sa nazivom
        let naziv = document.createElement("td");
        red.appendChild(naziv);
        naziv.innerHTML = data[i].name;
        //dodavanje celije sa cijenom
        let cijena = document.createElement("td");
        red.appendChild(cijena);
        cijena.innerHTML = data[i].price;

        let godina = document.createElement("td");
        red.appendChild(godina);
        godina.innerHTML = data[i].year;

        let proizvodac = document.createElement("td");
        red.appendChild(proizvodac);
        proizvodac.innerHTML = data[i].manufacturer;

        //dodavanje celije sa slikom
        let slikaUrl = document.createElement("img");
        slikaUrl.setAttribute("src", data[i].photoUrl);
        slikaUrl.setAttribute("width", "200");
        slikaUrl.setAttribute("height", "150");
        red.appendChild(imageUrl);
    }
}
*/



// API: https://ptf-web-dizajn-2022.azurewebsites.net/swagger/v1/swagger.json
// GET

function showResult() {
    fetch('https://ptf-web-dizajn-2022.azurewebsites.net/api/Cars')
        .then(res => {
            if (res.ok) {
                console.log("GET request successful")
            } else {
                console.log("GET request unsuccessful")
            } return res
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
}
