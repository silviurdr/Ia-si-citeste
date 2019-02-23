

$(document).ready(function() {

// Handles the letters composing Netflix's logo

    $(".netflix-icon").lettering();

// Show more reviews when the button is clicked

    $("#more-reviews-button").click(function() {
      $("#add-article-1").show();
      $("#add-article-2").show();
      $("#more-reviews-button").hide();
    });

// Handles the answers to the events attendance

    $(".attendance-answer-yes").on("click", function(){
      $(this).next().addClass("event-answer-gray").click(false);
    });

    $(".attendance-answer-no").on("click", function(){
      $(this).prev().addClass("event-answer-gray").click(false);
    });

//  Shows more/less text on the Reader's Travels articles

    $(".travel-article-details-1, .travel-article-details-2, .travel-article-details-3, .travel-article-details-4").elimore();

});

// Randomly selecting a book recommendations


const imagesArray = ["images/IvanDen.jpg", "images/UnbBei.jpg", "images/DalCat.jpg", "images/LovCho.jpg", "images/AliWon.jpg"];

const articlesArray = [
  "https://www.goodreads.com/book/show/17125.One_Day_in_the_Life_of_Ivan_Denisovich?ac=1&from_search=true",
  "https://www.goodreads.com/book/show/9717.The_Unbearable_Lightness_of_Being?ac=1&from_search=true",
  "https://www.goodreads.com/book/show/15805413-the-dalai-lama-s-cat?from_search=true",
  "https://www.goodreads.com/book/show/9712.Love_in_the_Time_of_Cholera?from_search=true",
  "https://www.goodreads.com/book/show/6324090-alice-s-adventures-in-wonderland?from_search=true"
];

function choseBook() {
  var rand = Math.floor(Math.random()* imagesArray.length);
  document.getElementById("book-to-slide").src = imagesArray[rand];
  document.getElementById("review").href = articlesArray[rand];
}


// Adds tip of the moment based on the current time


let today = new Date();
let hourNow = today.getHours();
let message;

if (hourNow > 18) {
  message = "Good Evening! Books serve to show a man that those original thoughts of his aren’t very new after all.";
} else if (hourNow > 12) {
  message = "Good Afternoon! The only important thing in a book is the meaning that it has for you.";
} else if (hourNow > 22) {
  message = "Good Night! I cannot sleep unless I am surrounded by books.";
} else {
  message = "Good Morning! Read the best books first, or you may not have a chance to read them at all.";
}

var elTip = document.getElementById("tips");
elTip.textContent = message;


// Full screen gallery functionality


let sliderImages = document.querySelectorAll('.slide');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');
let current = 0;


// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// Init slider
function startSlide() {
  reset()
  sliderImages[0].style.display = 'block';
}

  // Show previous
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function() {
  if(current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener('click', function() {
  if(current === sliderImages.length - 1) {
    current = -1;
  }
    slideRight();
});

startSlide();

$(".gallery").click(function(){
  $(".kids-with-guns-gallery").fadeIn(400);
});

$(".close").click(function(){
  $(".kids-with-guns-gallery").fadeOut(400);
});


// Google Maps Api

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.6556, lng: 25.610},
    zoom: 13
  });

// Array of markers

  var markers = [
    {
      coords:{lat: 45.645726, lng: 25.587183},
      iconImage:'images/library.png',
      content: '<div class="infoMarkers"><h3 class="marker-title">Public Library</h3><img class="marker-image" src="images/bjbv.jpg"><p class="marker-features"> rent books &#124; reading room &#124; events </p><p class="marker-logo">BJBV - Central Location</p></div>',
      link: 'http://www.bjbv.ro/default.php'
    },
    {
      coords:{lat: 45.657256, lng: 25.598591},
      iconImage:'images/library.png',
      content: '<div class="infoMarkers"><h3 class="marker-title">Public Library</h3><img class="marker-image" src="images/bjbv2.jpg"><p class="marker-features"> rent books &#124; reading room &#124; events</p><p class="marker-logo">BJBV - Grivitei Location</p></div>',
      link: 'http://www.bjbv.ro/default.php'
    },
    {
      coords:{lat: 45.640763, lng: 25.589799},
      iconImage:'images/coffee.png',
      content: '<div class="infoMarkers"><h3 class="marker-title">Cafeteca</h3><img class="marker-image" src="images/cafeteca.jpg"><p class="marker-features"> good coffee &#124; relaxing music &#124; view </p><p class="marker-logo">Café - Grigoras Dinicu</p></div>',
      link: 'https://bit.ly/2t86cek'
    },
    {
      coords: {lat: 45.643200, lng: 25.596160},
      iconImage: 'images/bistro.png',
      content: '<div class="infoMarkers"><h3 class="marker-title">Simone</h3><img class="marker-image" src="images/simone.jpg"><p class="marker-features"> delicious food &#124; electro-swing music &#124; vegetarian </p><p class="marker-logo">Bistro - Politehnicii</p></div>',
      link: 'https://bit.ly/2I4lKpr'
    },
    {
      coords: {lat: 45.641811, lng: 25.590782},
      iconImage: 'images/events.png',
      content: '<div class="infoMarkers"><h3 class="marker-title">Tipografia</h3><img class="marker-image" src="images/tipografia.jpg"><p class="marker-features"> literary events &#124; alternative rock &#124; local food </p><p class="marker-logo">Pub - Diaconu Coresi</p></div>',
      link: 'http://tipo-grafia.ro/'
    },
    {
      coords: {lat: 45.658727, lng: 25.589116},
      iconImage: 'images/events.png',
      content: '<div class="infoMarkers"><h3 class="marker-title">Visssual</h3><img class="marker-image" src="images/visssual.jpg"><p class="marker-features"> literary events &#124; local artists &#124; cultural center </p><p class="marker-logo">Art Hub - Fabricii</p></div>',
      link: 'https://ro-ro.facebook.com/visssualreal/'

    },
    {
      coords: {lat: 45.643103, lng: 25.588685},
      iconImage: 'images/bookstore.png',
      content: '<div class="infoMarkers"><h3 class="marker-title">Okian</h3><img class="marker-image" src="images/okian.jpg"><p class="marker-features"> bookstore &#124; literary events &#124; brasov culture</p><p class="marker-logo">Bookstore - Muresenilor</p></div>',
      link: 'https://www.okian.ro/'
    },
    {
      coords: {lat: 45.631810, lng: 25.639930},
      iconImage: 'images/bookstore.png',
      content: '<div class="infoMarkers"><h3 class="marker-title">Carturesti</h3><img class="marker-image" src="images/carturesti.jpg"><p class="marker-features"> bookstore &#124; gifts &#124; coffee and tea </p><p class="marker-logo">Bookstore - Carrefour</p></div>',
      link: 'https://bit.ly/2DilQbG'
    },
    {
      coords: {lat: 45.672678, lng: 25.615021},
      iconImage: 'images/bookstore.png',
      content: '<div class="infoMarkers"><h3 class="marker-title">BookCity</h3><img class="marker-image" src="images/bookcity.jpg"><p class="marker-features"> bookstore &#124; gifts &#124; coffee and tea </p><p class="marker-logo">Bookstore - Coresi</p></div>',
      link: 'https://www.bookcity.ro/'
    }
  ]

// Loop through markers

  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }

// AddMarker function

  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: props.iconImage,
      link: props.link
    });

    var infoWindow = new google.maps.InfoWindow({
      content: props.content
    });

    marker.addListener('mouseover', function(){
      infoWindow.open(map, marker);
    });

    marker.addListener('mouseout', function() {
      infoWindow.close(map, marker);
    });

    marker.addListener('click', function(){
      window.open(props.link);
    });
  };
};

// Form Functionality


// Phone Number field requirements

function digitsOnly(input) {
    let regex = /[^0-9, -, (, ), +]/gi;
    input.value = input.value.replace(regex, '');
  };

// Form fields validation

function formValidation() {

// Variables for the text fields
  var formName = document.getElementById("form-name");
  var formEmail = document.getElementById("form-email");
  var formPhone = document.getElementById("form-phone");
  var formMessage = document.getElementById("form-message");

// Variables for the radio buttons
  var radioAnswerFew = document.getElementById("radio-answer-few");
  var radioAnswerMore = document.getElementById("radio-answer-more");
  var radioAnswerAlot = document.getElementById("radio-answer-alot");
  var radioAnswerMany = document.getElementById("radio-answer-many");
  var radioAnswerAddict = document.getElementById("radio-answer-addict");

// Variables for the drop-down answers
  var formDropDownAnswer = document.getElementById("answers");
  var selectedValue = formDropDownAnswer.options[formDropDownAnswer.selectedIndex].value;

// Variable for the contact form
  var contactForm = document.getElementById("frm");


  if ((formName.value == "") || (formEmail.value == "") || (formPhone.value == "") || (formMessage.value == "") || (!radioAnswerFew.checked && !radioAnswerMore.checked && !radioAnswerAlot.checked && !radioAnswerMany.checked && !radioAnswerAddict.checked) || (selectedValue == "Select answer"))  {
     alert("Please make sure that all the fields are answered");
     return false;
   }  else {
        var submitInfoAlert = "Thank you for the submitted info! Your message is turning into nothingness.";
        alert(submitInfoAlert);
   }
  contactForm.reset();
};
