

let cl = console.log;

const signInForm = document.getElementById("signInForm")

const email = document.getElementById('email')

const password =document.getElementById('password')

let emailFromDB ='jhon@wick.com';
let passFromDB = 'Jhon@1234';



const onSignInHandler =(eve)=>{
    // cl('sign in')
    eve.preventDefault();
    let emailval = email.value;
    let passwordval = password.value;

 

    if(emailval === emailFromDB && passwordval === passFromDB){
        // alert('sign in successfully')
        Swal.fire({
            position: 'top-start',
            icon: 'success',
            title: 'sign in successfully',
            showConfirmButton: false,
            timer: 3000
          })
        signInForm.reset();
        return true;
    }else{
        // alert('invalid id or password')
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'invalid id or password',
            timer: 3000
          })
        signInForm.reset();
        return false;
    }
}



signInForm.addEventListener('submit',onSignInHandler)