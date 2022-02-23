let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lulzsec.png') {
      myImage.setAttribute('src','images/corona.png');
    } else {
      myImage.setAttribute('src','images/lulzsec.png');
    }
}
/*let mySite = document.querySelector('h1'); //This is script is changing my h1 content on mouse click

  mySite.onclick = function() {
  mySite.textContent = 'Anonymous'
  }*/

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Wonderland, ' + myName + ' !';
  }
}


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to Wonderland, ' + storedName;
}
