$('.owl-carousel').owlCarousel({
    loop:true,
    center:true,
    margin:5,
    autoplay:true,
    // nav:true,
    autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        540:{
            items:1.5
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
})

$('#OwnerRegisterButton').click(()=>{
  console.log('clicked');
  $('#userRegister').hide();
  $('#OwnerRegister').show();
  $('#OwnerRegisterButton').css('background-color','White');
  $('#userRegisterButton').css('background-color','rgba(0,0,0,0.8)');
  $('#OwnerRegisterButton').css('color','black');
  $('#userRegisterButton').css('color','white');
});
$('#userRegisterButton').click(()=>{
  $('#OwnerRegister').hide();
  $('#userRegister').show();
  $('#OwnerRegisterButton').css('background-color','rgba(0,0,0,0.8)');
  $('#userRegisterButton').css('background-color','white');
  $('#OwnerRegisterButton').css('color','white');
  $('#userRegisterButton').css('color','black');
});
const services = document.getElementById('services');
const serviceOptions = document.getElementById('serviceOptions');


services.addEventListener( 'mouseover',()=>{
    if( serviceOptions.style.display == 'block'){
        serviceOptions.style.display = 'none';
    }
    else{
        serviceOptions.style.display = 'block';
    }
});

const IstSearch = document.getElementById('IstSearch');
const IIndSearch = document.getElementById('IIndSearch');
const IIndSearchOptions = document.getElementById('IIndSearchOptions');
const IstSearchOptions = document.getElementById('IstSearchOptions');
IstSearch.addEventListener('click',()=>{
              if( IIndSearchOptions.style.display == 'block'){
                IIndSearchOptions.style.display = 'none';
              }
              IstSearchOptions.style.display = 'block';
             
});
IIndSearch.addEventListener('click',()=>{
            if( IstSearchOptions.style.display == 'block'){
                IstSearchOptions.style.display = 'none';
              }
              IIndSearchOptions.style.display = 'block';
 });
const option1 = document.querySelectorAll('#IstSearchOptions p');
for(let i=0;i<option1.length;i++){
             option1[i].addEventListener('click',()=>{
                IstSearch.value=option1[i].textContent;
                IstSearchOptions.style.display = 'none';
             })
}
const option2 = document.querySelectorAll('#IIndSearchOptions p');
for(let i=0;i<option2.length;i++){
             option2[i].addEventListener('click',()=>{
                IIndSearch.value = option2[i].innerHTML;
                IIndSearchOptions.style.display = 'none';
             })
}
 
 document.addEventListener('click',(e)=>{
      let targetElem = e.target;
      if((targetElem != IstSearch) && (targetElem != IIndSearch) && (targetElem != services)){
          if(IstSearchOptions.style.display == 'block'){
            IstSearchOptions.style.display = 'none';   
          }
          if(IIndSearchOptions.style.display == 'block'){
            IIndSearchOptions.style.display = 'none';   
          }
          if(serviceOptions.style.display == 'block'){
            serviceOptions.style.display = 'none';   
          }
      }
 
 })
     

 // register login section
 $('.register-form').click(()=>{
    if($('#login').css('display')=='block'){
      $('#login').modal('hide'); 
    }
    if($('#forget').css('display')=='block'){
      $('#forget').modal('hide'); 
    }
    $('#register').modal('toggle');
    });

    $('.login-form').click(()=>{
      if($('#register').css('display')=='block'){
      $('#register').modal('hide'); 
    }
    if($('#forget').css('display')=='block'){
      $('#forget').modal('hide'); 
    }
     $('#login').modal('toggle');
    });

    $('.forget-form').click(()=>{
      if($('#register').css('display')=='block'){
      $('#register').modal('hide'); 
      }
      if($('#login').css('display')=='block'){
      $('#login').modal('hide'); 
      }
     $('#forget').modal('toggle');
    });

    $('.input-email').click(()=>{
      
     $('.email').animate({top:'0.5rem'},80);

    });
    $('.input-mobile').click(()=>{
      $('.mobile').animate({top:'0.5rem'},80);
  });
  $('.input-password').click(()=>{
    $('.password').animate({top:'0.5rem'},80);
});
$('.input-confirm-password').click(()=>{
  $('.confirm-password').animate({top:'0.5rem'},80);
});
