$('#tabs li').click(function(){
  var t = $(this).children('a').attr('id');
  var t1 = $('#tabs li.active a').attr('id');

  if(! $(this).hasClass('active')){ //this is the start of our condition 
    $('#tabs li.active').removeClass('active');           
    $(this).addClass('active');

    $('#'+t1+'C').hide();
    $('#'+ t + 'C').fadeIn('slow');
 }
});