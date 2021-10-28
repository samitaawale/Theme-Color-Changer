document.getElementById('redButton').onclick = switchRed;
document.getElementById('yellowButton').onclick = switchYellow;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('greenButton').onclick = switchGreen;

function switchRed(){
    document.getElementsByTagName('body')[0].style.backgroundColor= 'red';
    document.getElementsByTagName('body')[0].style.color ="white";
}
function switchYellow(){
    document.getElementsByTagName('body')[0].style.backgroundColor= 'yellow';
    document.getElementsByTagName('body')[0].style.color ="black";
}
function switchBlue(){
    document.getElementsByTagName('body')[0].style.backgroundColor= 'blue';
    document.getElementsByTagName('body')[0].style.color ="white";
}
function switchGreen(){
    document.getElementsByTagName('body')[0].style.backgroundColor= 'green';
    document.getElementsByTagName('body')[0].style.color ="white";
}
