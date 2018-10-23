$(document).ready(function(){
    var c = $(".curtain");
    var s = $(".scrollimg");
    
    var m = 1;
    
    var scrolling = false;
    
    $("html").keydown(function(event) {
        //console.log("down: " + event.which);
        if (event.which === 32 && !scrolling) {
            scrolling = true;
            
            s.animate({
                top: ["-=30000", "linear"]
            }, 500000, function() {
                //none
            });
        }
    });
    
    $("html").keyup(function(event) {
        //console.log("up: " + event.which);
        if (event.which === 32 && scrolling) {
            scrolling = false;
            
            s.stop(true);
        }
        
    });
    
    $("html").keypress(function(event) {
        //console.log(event);
        
        switch(event.which) {
            case 115: //s
            case 32:  //space  down
                var o = s.offset();
                o.top -= m;
                s.offset(o);
                break;
                
            case 83: //S
                var o = s.offset();
                o.top -= 50*m;
                s.offset(o);
                break;
            
            case 119: //w up
                var o = s.offset();
                o.top += m;
                s.offset(o);
                break;
                break;
                
            case 87: // W
                var o = s.offset();
                o.top += 50*m;
                s.offset(o);
                break;
            
            case 116: //t curtain --
                c.height(c.height() - m);
                break;
            case 103: //g curtain ++
                c.height(c.height() + m);
                break;
                
            case 84: //T
                c.height(c.height() - 10*m);
                break;
            case 71: //G
                c.height(c.height() + 10*m);
                break;
        }
    });
}); 
