
import { dogs } from './data.js'

class DogsData{
    constructor(data){
        Object.assign(this,data)
    }

    getReaction(xr){
        this.hasBeenLiked = xr
        if(this.hasBeenLiked){
            document.querySelector('.liked-badge').style.display = 'block'
            setTimeout(() => {
                document.querySelector('.liked-badge').style.display = 'none'
            }, 800);
        }
        if(this.hasBeenLiked === false){
            document.querySelector('.nope-badge').style.display = 'block'
            setTimeout(() => {
                document.querySelector('.nope-badge').style.display = 'none'
            }, 800);
        }

        this.hasBeenSwiped = true;
    }
    getDogHtml(){
       const {name,avatar,age,bio,hasBeenSwiped,hasBeenLiked} = this;
        return `
        <div class="tin-details">
            <img src="${avatar}" alt="profile-post">
            <div class="user-details">
                <h3>${name}, <span>${age}</span></h3>
                <p>${bio}</p>
            </div>
        </div>
        `
    }
}

export default DogsData
