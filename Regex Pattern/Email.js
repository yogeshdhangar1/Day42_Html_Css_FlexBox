function hello(event)
{
    event.preventDefault();
    let EmailRegex =  '^/[a-zA-Z]+([_+-.][a-zA-Z]*[@][a-zA-Z]+[.][a-z]{2,3}([.][a-zA-Z]{2}))$/;'
    let name = document.getElementById('email').value;

    if(EmailRegex.test(name))
     {
        localStorage.setItem("email",Email);
        alert("Hello, "+ localStorage.getItem("email"));
     }else
     {
        alert("Enter valid email");
        document.getElementById("name-err").innerHTML ="Min 3 chars & first letter capital!"
     }
    }
    function check(event)
{
    event.preventDefault();
    let EmailRegex = '^/[a-zA-Z]+([_+-.][a-zA-Z]*[@][a-zA-Z]+[.][a-z]{2,3}([.][a-zA-Z]{2}))$/;'
    let name = document.getElementById('email').value;

    if(!firstNameRegex.test(email))
    document.getElementById("email-err").innerHTML ="Min 1 chars & first letter capital And Special Symbol!"
   else
   document.getElementById("email-err").innerHTML =""
}
document.getElementById('form')
   .addEventListener('submit',hello);

