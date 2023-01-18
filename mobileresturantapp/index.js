import { menuArray } from "./MRAdata.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
const orderArray = []
const total = document.querySelector('.total')
const completOrderBtn = document.getElementById('complete-order')
const modal = document.getElementById('modal')
const modalForm = document.getElementById('form')
const pay = document.getElementById('submit')


modalForm.addEventListener('submit',(e) => {
    e.preventDefault();

    // remove modal after form has been validated
    modal.style.visibility = 'hidden'; 
    document.getElementById('order-section').innerHTML = 
    `
    <div class="checked-out">
       <p>Your Order is on the way..........Thank you</p>
       <img src="images/waiter.jpg">
    </div>
    `
})

// adding an event listener for simplier events
document.addEventListener('click',(e) => {
    if(e.target.dataset.add){
        handleSelectedOrder(e.target.dataset.add)
    }

    if(e.target.dataset.remove){
       handleRemoveOrder(e.target.dataset.remove)
    }
})

// functionality to be able to remove orders
function handleRemoveOrder(orderID){
   const removableOrder = orderArray.filter(removable => {
       return orderID === removable.uuid
   })[0];

   for(let i = 0; i < orderArray.length;i++){
     if(orderArray[i] === removableOrder){
       orderArray.splice(i,1)
       setOrderArray()
     }
   }
}


// render out the customers order
function setOrderArray(){
    let htmlOrderItem = ``;
    let totalOrderSum = 0;

    if(orderArray.length){
        orderArray.forEach(orderItem => {

            htmlOrderItem +=  `
            <div class="your-order">
              <div class="your-orderItem">
                  <span>${orderItem.name}</span>
                  <span class="remove-item" data-remove="${orderItem.uuid}">
                     <i class="fa fa-trash" data-remove="${orderItem.uuid}"></i>
                  </span>
              </div
               <span>$${orderItem.price}</span>
            </div>
            `
            
            // sum up and render the totalSum
            totalOrderSum += orderItem.price;
            total.innerHTML = `
            <p>Total</p>
            <span>${totalOrderSum}</span>
            `
            //  the complete-order && form modal style toggle
            completOrderBtn.style.visibility = 'visible';
            completOrderBtn.addEventListener('click',() =>{
              modal.style.visibility = 'visible'
            })
            document.getElementById('your-order').innerHTML = htmlOrderItem;
            return htmlOrderItem;
        })
    }
}

// handle the menu order.... 'plus click'
function handleSelectedOrder(menuID){
    const selectedMenuItem = menuArray.filter(menuItem => {
        return menuID === menuItem.uuid
    })[0]
      

    // push the menuArray items to the orderArray to be rendered
    orderArray.push({
        name: selectedMenuItem.name,
        price: selectedMenuItem.price,
        uuid: uuidv4(),
    })
    renderMenuItems()
    setOrderArray()
}


// get the menu Items 
function getMenuArray(){
    let htmlMenuItems = ``;
    menuArray.forEach(menuItem => {
        htmlMenuItems += 
        `
        <div class="fast-foodContents">
           <div class="food-items">
              <div class="items-details">
                  <img src="${menuItem.image}">
                  <div class="items-desc">
                      <p class="item-name">${menuItem.name}</p>
                      <p class="ingredients hidden">${menuItem.ingredients}</p>
                      <span class="item-price"><i class="fa fa-dollar">${menuItem.price}</i></span>
                  </div>
               </div>
              <button class="add-orderbtn" data-add="${menuItem.uuid}">+</button>  
           </div>
        </div>
        `
    })
    return htmlMenuItems;
}

// render out the menuItems
function renderMenuItems(){
    document.getElementById('menu').innerHTML = getMenuArray();
}
renderMenuItems()
