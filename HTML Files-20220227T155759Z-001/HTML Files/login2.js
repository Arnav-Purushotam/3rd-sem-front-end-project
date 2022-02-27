function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin@bmsce.ac.in"&& password=="User123*")
{
    window.open("untitled3.html");
    return false;

}
else
{
    alert("login failed");
}


}