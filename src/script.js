const cardCat = document.querySelector('.card-image-cat')
const btnCat = document.getElementById('btn-cat')
const cardDog = document.querySelector('.card-image-dog')
const btnDog = document.getElementById('btn-dog')

const tagImgGatinho = document.createElement('img')
tagImgGatinho.classList.add('tag-image-cat')
cardCat.appendChild(tagImgGatinho)

const tagImgDoguinho = document.createElement('img')
tagImgDoguinho.classList.add('tag-image-dog')
cardDog.appendChild(tagImgDoguinho)

let catImage;
async function capturaGatinho(){
    let response = await fetch('https://api.thecatapi.com/v1/images/search')
    let responseData = await response.json() 
    responseData.forEach((elem) => {
        catImageUrl =  elem.url;
    })
    return catImageUrl
}

async function renderizaGatinho(){
    const pCat = document.querySelector('.p-cat')
    pCat.innerHTML = ''
    let catImage = await capturaGatinho()
    tagImgGatinho.src = catImage
}

btnCat.addEventListener('click', () => renderizaGatinho())

let dogImage;
async function capturaDoguinho(){
    let response = await fetch('https://api.thedogapi.com/v1/images/search')
    let responseData = await response.json()
    responseData.forEach((elem) => {
        dogImageUrl = elem.url
    })
    return dogImageUrl
}

async function renderizaDoguinho(){
    const pDog = document.querySelector('.p-dog')
    pDog.innerHTML = ''
    let dogImage = await capturaDoguinho()
    tagImgDoguinho.src = dogImage
}

btnDog.addEventListener('click', () => renderizaDoguinho())