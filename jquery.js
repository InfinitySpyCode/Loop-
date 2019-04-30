var item1 = $('.anim1');
var item2 = $('.anim2');
var btn = $('buuton');
var decl = 0;

function reverse(a, b){
    item1.animate({
        left: a,
        duration: b
    }, function(){
        reverse('500px', 500);
    });
    
}

function revers(a, b){
    item2.animate({
        left: a,
        duration: b
    } , function(){
        revers('10px', 500);
    });

    revers('500%', 500)
}

$(document).ready(function(){
    
    item1.animate({
        left: '500px',
        duration: 500
    }, function(){
        reverse("10%", 500); 
    });

    

    item2.animate({
        left: '500px',
        duration: 500
    }, function(){
        item2.animate({
            left: '10%'
        }, slow, revers('500px', 500));
    });

    
    
    
    
        
    
    



    /*function loop(dist, obj){
        for(var i=0; i<= obj.lenght-1; i++){
            if(obj[i] === 'left' && obj.obj[i] === dist){
               console.log('Stop animation');
            }
        }
    }

    loop('500px', objs);*/


});