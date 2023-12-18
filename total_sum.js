document.getElementById('getdeposit').addEventListener('click',function(){
    const get_money1=document.getElementById('money1');
    const read_money1=get_money1.value;
    const new_money1=parseFloat(read_money1);
    
    const get_deposit=document.getElementById('Deposit_money');
    const read_deposit=get_deposit.innerText;
    const new_deposit_money=parseFloat(read_deposit);
    // console.log(new_deposit_money);

    const get_total_balance=document.getElementById('total_balance');
    const read_total_balance=get_total_balance.innerText;
    const new_total_balance=parseFloat(read_total_balance);

    const Deposit1=new_deposit_money + new_money1;
    get_deposit.innerText=Deposit1;

    const Total_balance=new_total_balance + new_money1;
    get_total_balance.innerText=Total_balance;
    get_money1.value='';
})

document.getElementById('getwithdraw').addEventListener('click',function(){
    const get_money2=document.getElementById('money2');
    const read_money2=get_money2.value;
    const new_money2=parseFloat(read_money2);

    const get_Withdraw_money=document.getElementById('Withdraw_money');
    const read_Withdraw_money=get_Withdraw_money.innerText;
    const new_Withdraw_money=parseFloat(read_Withdraw_money);
     

    const withdraw=new_Withdraw_money + new_money2;
    get_Withdraw_money.innerText=withdraw;

    const get_total_balance=document.getElementById('total_balance');
    const read_total_balance=get_total_balance.innerText;
    const new_total_balance=parseFloat(read_total_balance);
    
    const totalBalance= new_total_balance - new_money2;
    get_total_balance.innerText=totalBalance;
    
    get_money2.value='';
    

})