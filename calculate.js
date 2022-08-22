
//get input field amount function

function getFieldAmount(fieldId){

    const perPlayerField = document.getElementById(fieldId);
    const perPlayerFieldString = perPlayerField.value;
    const perPlayerAmount = parseInt(perPlayerFieldString);
    perPlayerField.value='';
    return perPlayerAmount;

}

//get expenses and total amount function

function getAmount(AmountId){
    const amountField = document.getElementById(AmountId);
    const amountFieldString = amountField.innerText;
    const amount = parseInt(amountFieldString);
    return amount;
}




const expensesAmount = getAmount('expenses-amount');
const totalAmount = getAmount('total-amount');





document.getElementById('calculate-btn').addEventListener('click',function(){
        const x = getFieldAmount('per-player-field');
        

});

 

 document.getElementById('total-calculate').addEventListener('click',function(){

        const managerAmount = getFieldAmount('manager-field');
        const coachAmount = getFieldAmount('coach-field');
        
});