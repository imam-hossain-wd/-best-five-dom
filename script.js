


const orderList = document.querySelector('.order-list');

function countChild(){
  const olChildrenlength = orderList.children.length;
  return olChildrenlength ;
}


const button = document.querySelectorAll('.select-button');

// loop the button and get the selectd button player name 

        for(let i = 0; i<9; i++){

            let getAllButton = button[i];

            getAllButton.addEventListener('click',function(){
            const parent = this.parentNode;
            const firstChild = parent.firstElementChild;
            const getName = firstChild.innerHTML;

  
  // a condition => if user select five button show alert
  // and cannot select more 


          const olchildren = countChild();
          if( olchildren < 5){

            //create li add innertext from selected button and 
            //added in html ol tag

            const listItem = document.createElement('li');
            listItem.innerText=getName;
            orderList.appendChild(listItem);

             //disable selected button 
             getAllButton.disabled = "disabled";
             getAllButton.classList.add('disable-button');
             getAllButton.innerText='selected';

          }

          else{
            alert('You cannot select more than 5 ')
          }
                    
   });
 };

