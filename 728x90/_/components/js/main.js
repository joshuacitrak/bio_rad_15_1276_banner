function playAd(){  
    
    var stl = new TimelineLite();
    stl.from('#bradSvg1Container', 15, {scale:1.6, x:-200, y:-190, rotationX:20, force3D:true})
       .to("#bradSvg2Container", 3, {rotationX:40, x:70, scale:0.9, z:-300, force3D:true}, 0)
       .to("#bradSvg2Container", 3, {rotationX:0,  x:40, scale:1.2, z:-100,force3D:true}, 3)
        .to("#bradSvg2Container", 3, {rotationX:-40,  x:10, scale:.9, z:0,force3D:true}, 6)
        .to("#bradSvg2Container", 3, {rotationX:0,  x:-20 }, 9)
        .to("#bradSvg2Container", 3, {opacity:0, scale:1.4, rotationX:-40,  x:-50,ease: Power3.easeOut }, 12);
    
    var ttl = new TimelineLite();
    ttl.from("#bradT1", .8, {y:-50, opacity:0,ease: Power3.easeOut}, 0)
       .to("#bradT1", .8, {y:-50, opacity:0,ease: Power3.easeOut}, 3)
       .from("#bradT2", .8, {x:-80, opacity:0,ease: Power3.easeOut}, "-=.4")
       .to("#bradT2", .8, {x:80, opacity:0,ease: Power3.easeOut}, "+=1")
       .from("#bradT3", .8, {y:-80, opacity:0,ease: Power3.easeOut}, "-=.4")
       .from("#bradT4", .8, {x:80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .to("#bradT3", .8, {y:-80, opacity:0,ease: Power3.easeOut}, "+=1")
       .to("#bradT4", .8, {x:80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .from("#bradT5", .8, {y:-80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .from("#bradT6", .8, {y:120, opacity:0,ease: Power3.easeOut}, "-=.6")
       .to("#bradT5", .8, {x:80, opacity:0,ease: Power3.easeOut}, "+=1")
       .to("#bradT6", .8, {x:80, opacity:0,ease: Power3.easeOut}, "-=.8")
       .from("#bradT7", .8, {x:-80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .to("#bradT7", .8, {x:80, opacity:0,ease: Power3.easeOut}, "+=1")
       .from("#bradT8", .8, {y:-80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .from("#bradT9", .8, {y:-80, opacity:0,ease: Power3.easeOut}, "-=.8");
    
    var ctl = new TimelineLite();
        ctl.from("#bradKidney", 3, {opacity:0, scale:0,x:-20, ease: Power2.easeOut})
       .from("#bradFlare", 1.5, {x:-320, opacity:0,ease: Power3.easeOut}, "-=1.6")
       .from("#bradCtaContainer", .8, {clip:"rect(0px 0px 182px 0px)", opacity:0,ease: Power3.easeOut}, "-=1.4")
       .from("#bradCta", .8, {opacity:0, ease: Power3.easeOut}, "-=.6")
       .from("#bradKidneyFlare", 1.5, {opacity:0, ease: Power3.easeOut}, "-=.6");
    
    tl.add(stl, 0)
    .add(ttl, 0)
    .add(ctl, 12);
    tl.totalDuration(15);
    
       
};

function addListeners(){
    
};


function animationComplete(evt){
};

function updateSlider() {
  $("#slider").slider("value", tl.progress() *100);
}

$("#play").click(function() {
  //play() only plays forward from current position. If timeline has finished, play() has nowhere to go.
  //if the timeline is not done then play() or else restart() (restart always restarts from the beginning).

  if(tl.progress() != 1){
    //carl just changed this again
        tl.play();
  } else {
    tl.restart();
  }
});
        
$("#pause").click(function() {
        tl.pause();
});
        
        
$("#restart").click(function() {
        tl.restart();
});     
    
$("#slider").slider({
  range: false,
  min: 0,
  max: 100,
  step:.1,
  slide: function ( event, ui ) {
    tl.pause();
    //adjust the timeline's progress() based on slider value
    tl.progress( ui.value/100 );
    }
}); 


$(document).ready(function(){
    //set defaults
    TweenLite.set("#bradContainer", {opacity:1});
    TweenLite.set('#bradSvg1Container', {scale:.7, x:200, y:-200, opacity:.8});
    TweenLite.set("#bradSvg2Container", { scale:.6, rotation:180, x:100, y:-180, opacity:.8});
    TweenLite.set("#bradKidney", { rotation:7});
    addListeners();
    playAd();
});

var tl = new TimelineLite({onUpdate:updateSlider});
tl.eventCallback("onComplete", animationComplete);