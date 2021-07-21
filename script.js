function login() {
    let user_name = uname.value;
    let password = pwd.value;

    validate(user_name,password,callback)
    
}
 function validate(usname,upwd,callback){
    
    // alert(usname)
    // alert(upwd)
     if (usname == "admin" && upwd =="password"){
        // var flag = true;
        // page(flag);
        callback();
       
         
     }
     else {
        alert("Wrong credentials username and password doesnt match")
       
        
     }

 }
  function callback(){
    //   alert("inside callback")
   
        
          
          window.open("todomainpage.html");
           
        
    
    
  }
  function page (flag){
      if (flag){
          alert("inside page")
          return true;
      }
      else {
        document.getElementById("passworderror").innerHTML= "Wrong credentials username and password doesnt match";
        passworderror.style.color = "red"  
        return false }
  }
