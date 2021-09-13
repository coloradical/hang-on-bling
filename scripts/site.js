
/**
 * This script wrapped in a Immediately-Invoked Function Expression (IIFE) to
 * prevent variables from leaking onto the global scope. For more information
 * on IIFE visit the link below.
 * @see http://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 */

(function() {
  'use strict';

  // Load all images via Squarespace's Responsive ImageLoader
  function loadAllImages() {
    var images = document.querySelectorAll('img[data-src]' );
    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i], {load: true});
    }
  }

  // The event subscription that loads images when the page is ready
  document.addEventListener('DOMContentLoaded', loadAllImages);

  // The event subscription that reloads images on resize
  window.addEventListener('resize', loadAllImages);

}());

var productButtons = document.getElementsByClassName('product-price');
var productPrices = document.getElementsByClassName('sqs-money-native');

for(i=0; i<productButtons.length; i++){
  productButtons[i].classList.add("magenta-btn");
  productPrices[i].insertAdjacentHTML('beforebegin', '<span>SHOP-</span>');
}

function toggleNavigation(toggleNumber, shrink){
  var mobileNavMenu = document.getElementById('mobile-nav');
  var fullNav = document.getElementById('site-navigation-wrapper');
  var fullNavClose = document.getElementById('main-nav-close');
  var expandNavBtn = document.getElementById('expand-close');

  if (toggleNumber === 0 & shrink){
    expandNavBtn.style.display = 'block';
    fullNav.style.animation = "shrink 0.25s cubic-bezier(1.000, 0.75, 0.5, 0.25) both";
    fullNavClose.style.display = "none";
  } 
  
  else if (toggleNumber === 0 && !shrink){
    expandNavBtn.style.display = 'none';
    fullNav.style.animation = "expand 0.25s cubic-bezier(1.000, 0.75, 0.5, 0.25) both";
    fullNavClose.style.display = "block";
  }
  
  else if (toggleNumber === 1 && !shrink) {
    mobileNavMenu.style.display="block";
    document.getElementById('secondary-mobile-close').style.display = "block";
  } else {
    mobileNavMenu.style.display="none";
    document.getElementById('secondary-mobile-close').style.display = "none";
  }
  

}

// <script src="//uploader.squarewebsites.org/sqs-form-upload.min.js"></script>
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

window.addEventListener("load", function(){
  document.body.style.animation = "fade-in 1s cubic-bezier(.39,.575,.565,1.000";
  document.body.style.opacity = "1";
});



$(document).ready(function() { 
    $('div#confirmed-page').append(' <h2> Want free shipping on your next order? </h2> ')
  $('div#confirmed-page').append(' <a href="https://us2.list-manage.com/survey?id=ee9eff5005&u=17f239ae3b2110af2d35424a9" target="_blank" > Take our 5 second survey here! </a> ')
  
  });
  
 


function toggleItem(elementName){
  var hideThis = document.getElementById(elementName);
  if (hideThis.style.display === "block"){
      hideThis.style.display = "none";
  

  } else {
      hideThis.style.display = "block";
  }
  
}

