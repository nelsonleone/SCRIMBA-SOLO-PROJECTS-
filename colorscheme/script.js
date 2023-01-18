
const toggleIcon = document.getElementById('toggle-icon')
const header = document.querySelector('header')
const toggleDiv = document.querySelector('.toggle-theme')
const randomImg = document.querySelector('img')
randomImg.addEventListener('click',getRandomColorScheme)
let xr = false;


// toggling the theme, toggle options ain't much so made it simple
toggleIcon.addEventListener('click',() =>{
    if(xr === false){
        toggleIcon.style.left = '52%'
        header.style.backgroundColor = 'black'
        header.style.color = 'white'
        toggleDiv.style.border =  '2px solid white'
        randomImg.style.filter = 'brightness(0)  invert(1)'
        xr = true;
    }else if(xr === true){
        toggleIcon.style.left = '1%'
        header.style.backgroundColor = 'rgb(212, 209, 209)'
        header.style.color = 'black'
        toggleDiv.style.border =  '2px solid black'
        randomImg.style.filter = 'brightness(1) invert(0)'
        xr = false;
    }
})



// setting the fetch request
const getSchemeBtn = document.querySelector('[data-button]').addEventListener('click',getColorScheme)
const main = document.querySelector('main')

function getColorScheme(){
    const selectInput = document.querySelector('[data-select]').value;
    const colorPicker = document.querySelector('[data-color]').value.slice(1);
    const colorCount = document.querySelector('[data-count]').value;

    fetchApiData(selectInput,colorPicker,colorCount)
    clearInput()
}

function fetchApiData(selectInput,colorPicker,colorCount){
	fetch(`https://www.thecolorapi.com/scheme?hex=${colorPicker}&mode=${selectInput}&count=${colorCount}`)
    .then(resp => resp.json())
    .then(data => {
		main.innerHTML = "";
        for(let i = 0; i < colorCount;i++){
            const colorScheme = document.createElement('div')
            const colorHash = document.createElement('span')
            colorScheme.appendChild(colorHash)
            colorScheme.style.backgroundColor = data.colors[i].hex.value;
            colorHash.innerText = data.colors[i].hex.value;
            main.appendChild(colorScheme)  

            // adding the copy functionality
            document.querySelectorAll('span').forEach(span => {
                span.addEventListener('click',() => {
                    const copyText = span.innerText;
                    navigator.clipboard.writeText(copyText)
                    document.querySelector('.copied').style.visibility = 'visible';
            
                    setTimeout(() => {
                        document.querySelector('.copied').style.visibility = 'hidden'
                    }, 1000);
                })
            })
        }
    })
}

function getRandomColorScheme(){
	const schemeArray = [
	  "monochrome",
	  "monochrome-light",
	  "analogic",
	  "complement",
	  "analogic-complement",
	  "triad",
	  "quad"
	]

	const selectInput = schemeArray[Math.floor(Math.random() * schemeArray.length)]
	const  colorCount =  Math.ceil(Math.random() * 10)
    const colorPicker = document.querySelector('[data-color]').value.slice(1);
	fetchApiData(selectInput,colorPicker,colorCount)
}

function clearInput(){
    document.querySelector('input').value = '';
    document.querySelector('main').innerHTML = '';
}
window.onload = clearInput


