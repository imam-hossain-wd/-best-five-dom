
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

//get total player expenses 

document.getElementById('calculate-btn').addEventListener('click',function(){
        const x = getFieldAmount('per-player-field');
        const countElement = countChild();

        const totalPlayerExpenses = x * countElement;

        document.getElementById('expenses-amount').innerText = totalPlayerExpenses;
});

 
//get final total expenses 

 document.getElementById('total-calculate').addEventListener('click',function(){

        const managerAmount = getFieldAmount('manager-field');
        const coachAmount = getFieldAmount('coach-field');
        const expensesTotalAmount = getAmount('expenses-amount');
        const managerCoachTotal = managerAmount + coachAmount;
        const alltotalAmount = managerCoachTotal + expensesTotalAmount;

        document.getElementById('total-amount').innerText=alltotalAmount;
    
});