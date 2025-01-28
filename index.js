function clicks(){
var values=document.getElementById("noof");
var imgs=document.getElementById("imgs");

var imgc=[];
var num=values.value;
if(num==0 || num<0 || num>6){
    alert("Please enter valid input");
}
else{
for(var i=0;i<num;i++)
{
    var rand=Math.floor(Math.random()*6+1);
    imgc.push(`<img src="./img/dice${rand}.png" class="dices" id="dice${rand}" alt="dice${rand} img">`);
}
imgs.innerHTML=imgc.join("");
}}