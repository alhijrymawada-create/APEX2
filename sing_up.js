function toggleForm(){

    let login = document.getElementById("login-form");
    let signup = document.getElementById("signup-form");
    let title = document.getElementById("form-title");
    let text = document.getElementById("switch-text");
    let btn = document.getElementById("switch-btn");
    
    if(login.classList.contains("hidden")){
    
    login.classList.remove("hidden");
    signup.classList.add("hidden");
    
    title.innerText="LOGIN";
    text.innerText="Don't have account?";
    btn.innerText="SIGN IN";
    
    }else{
    
    signup.classList.remove("hidden");
    login.classList.add("hidden");
    
    title.innerText="SIGN UP";
    text.innerText="Already have account?";
    btn.innerText="LOGIN";
    
    }
    
    }