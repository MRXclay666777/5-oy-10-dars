const userName = prompt("Enter your name:");
const userClr = prompt("Please choose the color: 1)GREEN 2)YELLOW 3)RED");
const userBgClr = prompt("Please, choose the color: 1)BLACK 2)BLUE 3)AQUA");

const Namee = document.createElement("h1");
Namee.textContent = (userName);
if(userClr == "" || userName == "" || userBgClr == ""){
    alert("please, enter your name, color and background color");
}else if(userClr == "1"){
    Namee.style.color = "green";
}else if(userClr == "2"){
    Namee.style.color = "yellow";
}else if(userClr == "3"){
    Namee.style.color = "red";
}else{
    Namee.textContent = ("You choosed wrong color, please try again.");
}
if(userBgClr == "1"){
    document.body.style.backgroundColor = "black";
}else if(userBgClr == "2"){
    document.body.style.backgroundColor = "blue";
}else if(userBgClr == "3"){
    document.body.style.backgroundColor = "aqua";
}else{
    Namee.textContent = ("You choosed wrong color, please try again.");
}
document.body.style.display = "flex";
document.body.style.alignItems = "center";
document.body.style.justifyContent = "center";
document.body.style.height = "100vh";

document.body.append(Namee);

