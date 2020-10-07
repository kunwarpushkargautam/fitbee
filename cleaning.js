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


 
 document.addEventListener('click',(e)=>{
      let targetElem = e.target;
      if((targetElem != services)){
         
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