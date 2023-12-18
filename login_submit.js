document.getElementById('getsubmit').addEventListener('click',function(){
    const get_email=document.getElementById('getemail');
    const read_email=get_email.value;
    const get_pass=document.getElementById('getpassword');
    const read_pass=get_pass.value;
    if(read_email=='asma@gmail.com' && read_pass== '12345'){
        window.location.href='bank.html';
    }
    else{
        alert('Sorry this is invalid email or password');
    }
   
})