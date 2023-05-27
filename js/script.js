const passwordbox=document.getElementById("password");
const length1=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="1234567890";
const symbols="!@#$%^&*(){}|?<>[]+-_=";
const allchar=uppercase+lowercase+numbers+symbols;
function createPassword(){
  let password="";
  password+=uppercase[Math.floor(Math.random()*uppercase.length)];
   password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
     password+=symbols[Math.floor(Math.random()*symbols.length)];
      while(length1>password.length){
      	password+=allchar[Math.floor(Math.random()*allchar.length)];
      	passwordbox.value=password;
      }
}
function copypassword(){
  passwordbox.select();
  document.execCommand("copy");
}