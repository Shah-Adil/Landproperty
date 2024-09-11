const menuBtn = document.querySelector("#menu-btn");
const menuContent = document.querySelector(".header-item");

menuBtn.onclick = function () {
  menuContent.classList.toggle("active");
  menuBtn.classList.toggle("fa-xmark");
};

window.onscroll = function () {
  menuContent.classList.remove("active");
  menuBtn.classList.remove("fa-xmark");
};

// value change 

$(".custom-radio").click(function (e) {
  $(".custom-radio").removeClass("active");

  $(this).addClass("active"); 

  let value1 =  this.querySelector(".payment-one-payment-btn").innerText ; 
  let value2 = this.querySelector(".payment-month-payment-btn").innerText ; 

  $(".one-payment").text(value1); 
  $(".month-value").text(value2);

  let set1 =  parseInt(document.getElementById("pay-2").innerText);
  let set2 = parseInt( document.getElementById("doc-pay").innerHTML);


  let total =   set1 + set2 ; 


  $("#totalDue").text(total); 


})



$(".testimonials").slick({
  dots: true,
  infinite: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$(".responsive").slick({
  dots: true,
  infinite: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});




// function changeSearch() {
 


// }



$("#search_slct").on("change" ,  function () {

     var selected = $(this).find(":selected").attr("value");

    $(".product-search-input").hide();

    $(".product-search-input" + "#" + selected).fadeIn();
});



$(".image-view").click(function (e) {

  let imageUrl = $(this).attr("src") ; 
  let imgShow = $(".image-modal-link");

  $(".image-view-modal").addClass("active");

  imgShow.attr("src" , imageUrl )


  $("#image-close").click(function () {
    $(".image-view-modal").removeClass("active");
  })

})


