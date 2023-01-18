// IMPORTING THE DOGS DATA AND CLASS
import { dogs } from './data.js'
import DogsData from './Dog.js'

let currentDogIndex = 0
let currentDog = new DogsData(dogs[currentDogIndex])

document.addEventListener('click',(e) => {
    if(e.target.dataset){
      setTimeout(handleSwipe,900)
    }
    if(e.target.dataset.like){
        handleLiked()
    }
    if(e.target.dataset.pass){
        handleDisliked()
    }
})

// SENDING MY DOGs DATA TO THE DOM
function render(){
    document.querySelector('.tin-dog').innerHTML = currentDog.getDogHtml()
}
render()

// HANDLING THE REACTION BUTTON CLICKS
function handleLiked(){
   currentDog.getReaction(true)
}
function handleDisliked(){
    currentDog.getReaction(false)
}

// FUNCTIONALITY FOR DISPLAY THE NEXT DOG
function handleSwipe(){
    if(currentDog.hasBeenSwiped){
        currentDogIndex += 1;
        currentDog = new DogsData(dogs[currentDogIndex])
        if(currentDogIndex === dogs.length){
            currentDogIndex = 0;
            currentDog = new DogsData(dogs[currentDogIndex])
        }
        render()
    }
}






