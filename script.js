
// click the button and put the player name 
const orderList = document.querySelector('.order-list');

function countChild(){
  const x = orderList.children.length;
  return x ;
}


const button = document.querySelectorAll('.select-button');


        for(let i = 0; i<9; i++){

            let getAllButton = button[i];

            getAllButton.addEventListener('click',function(){
            const parent = this.parentNode;
            const firstChild = parent.firstElementChild;
            const getName = firstChild.innerHTML;
  
  

          const x = countChild();
          if( x < 5){

            const listItem = document.createElement('li');
        
            listItem.innerText=getName;
            orderList.appendChild(listItem);

             //disable selected button 
             getAllButton.disabled = "disabled";
             getAllButton.classList.add('disable-button');

          }

          else{
            alert('You cannot select more than 5 ')
          }
                    
   });
 }

