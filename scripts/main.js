const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/chrome.jpg") {
    myImage.setAttribute("src", "images/firefox-icon.png");
  } else {
    myImage.setAttribute("src", "images/chrome.jpg");
  }
};
