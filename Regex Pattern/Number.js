function hello(event)
{
    event.preventDefault();
    let NumberRegex =  '^/(91)()[6-9](1)[0-9]{9}#$';
    let name = document.getElementById('number').value;

    if(NumberRegex.test(Number))
     {
        localStorage.setItem("Number",Number);
        alert("Hello, "+ localStorage.getItem("919284046592"));
     }else
     {
        alert("Enter valid Number");
        document.getElementById("number-err").innerHTML ="Min 2 number & first number!"
     }
    }
    function check(event)
{
    event.preventDefault();
    let NumberRegex = '^/(91)()[6-9](1)[0-9]{9}#$;'
    let number = document.getElementById('number').value;

    if(!numberRegex.test(Number))
    document.getElementById("number-err").innerHTML ="Min 2 numbers & first number"
   else
   document.getElementById("number-err").innerHTML =""
}
document.getElementById('form')
   .addEventListener('submit',hello);