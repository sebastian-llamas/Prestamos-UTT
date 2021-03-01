$(document).ready(function(){

  $("div.nav__link").hover(function (){
    $('#navbar').addClass("expander");
    $('#body-pd').addClass("body-pd");
  },function () {
    if($('ul.collapse__menu').hasClass('showCollapse')){
      $('ul.collapse__menu').removeClass('showCollapse');
    }
    $('#navbar').removeClass("expander");
    $('#body-pd').removeClass("body-pd");
  });

  $("div.nav__link").click(function () {
    if($(this).hasClass('showCollapse')){
      $('ul.collapse__menu').removeClass('showCollapse');
    }else{
      if(($('#navbar').hasClass('expander'))){
      $('ul.collapse__menu').addClass('showCollapse');
      }
    }
  });

});

/*const showMenu = (toggleId, navbarId, bodyId)=>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId),
    bodypadding = document.getElementById(bodyId)
  
    if(toggle && navbar){
      toggle.addEventListener('click', ()=>{
        navbar.classList.toggle('expander')
  
        bodypadding.classList.toggle('body-pd')
      })
    }
  }
  showMenu('nav-toggle','navbar','body-pd')*/
  
  /*===== LINK ACTIVE  =====*
  const linkColor = document.querySelectorAll('.nav__link')
  function colorLink(){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
  }
  linkColor.forEach(l=> l.addEventListener('click', colorLink))
  
  
  ==== COLLAPSE MENU  ===== 
  const linkCollapse = document.getElementsByClassName('collapse__link')
  var i
  
  for(i=0;i<linkCollapse.length;i++){
    linkCollapse[i].addEventListener('click', function(){
      const collapseMenu = this.nextElementSibling
      collapseMenu.classList.toggle('showCollapse')
  
      const rotate = collapseMenu.previousElementSibling
      rotate.classList.toggle('rotate')
    })
  }
  */