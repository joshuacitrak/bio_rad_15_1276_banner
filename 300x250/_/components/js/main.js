function playAd(){  
    
    var ntl = new TimelineLite();
    ntl.to("#bradSvg1Container", 15, {  x:120, y:105, scale:.5,rotation:-10}, "swoosh")
        .to("#bradSvg1Container", 7.5, { scale:.7,rotationX:-40,  z:100, force3D:true}, "swoosh")
       .to("#bradSvg2Container", 3, {rotationX:40, x:-200, scale:0.8, z:-300, force3D:true}, "swoosh")
       .to("#bradSvg2Container", 3, {rotationX:0,  x:-170, scale:1, z:-100,force3D:true}, 3)
       .to("#bradSvg1Container", 7.5, { scale:.5,rotationX:40,  z:0, force3D:true}, 7.5)
        .to("#bradSvg2Container", 3, {rotationX:-40,  x:-140, scale:1.2, z:0,force3D:true}, 6)
        .to("#bradSvg2Container", 3, {rotationX:-60,  x:-110 }, 9)
        .to("#bradSvg2Container", 3, {opacity:0, rotationX:-40,  x:-140 }, 12); 
    
    var ttl = new TimelineLite();
    ttl.to("#bradT1", .8, {y:50, opacity:1,ease: Power3.easeOut}, 0)
       .to("#bradT1", .8, {y:-30, opacity:0,ease: Power3.easeOut}, 3)
       .to("#bradT2", .8, {x:108, opacity:1,ease: Power3.easeOut}, "-=.4")
       .to("#bradT2", .8, {x:-10, opacity:0,ease: Power3.easeOut}, "+=1")
       .to("#bradT3", .8, {y:143, opacity:1,ease: Power3.easeOut}, "-=.4")
       .to("#bradT4", .8, {x:-234, opacity:1,ease: Power3.easeOut}, "-=.6")
       .to("#bradT3", .8, {y:0, opacity:0,ease: Power3.easeOut}, "+=1")
       .to("#bradT4", .8, {x:0, opacity:0,ease: Power3.easeOut}, "-=.6")
       .to("#bradT5", .8, {y:50, opacity:1,ease: Power3.easeOut}, "-=.6")
       .to("#bradT6", .8, {y:-163, opacity:1,ease: Power3.easeOut}, "-=.6")
       .to("#bradT5", .8, {x:250, opacity:0,ease: Power3.easeOut}, "+=1")
       .to("#bradT6", .8, {x:250, opacity:0,ease: Power3.easeOut}, "-=.6")
       .to("#bradT7", .8, {x:125, opacity:1,ease: Power3.easeOut}, "-=.6")
       .to("#bradT8", .8, {x:125, opacity:1,ease: Power3.easeOut}, "-=.6")
       .to("#bradT7", .8, {x:300, opacity:0,ease: Power3.easeOut}, "+=1")
       .to("#bradT8", .8, {x:300, opacity:0,ease: Power3.easeOut}, "-=.6")
       .from("#bradT9", .8, {x:-40, opacity:0,ease: Power3.easeOut}, "-=.6")
       .from("#bradT10", .8, {x:-60, opacity:0,ease: Power3.easeOut}, "-=.6");
    
   tl.add(ntl)
   .add(ttl, 0)
   .to("#bradKidney", 3, {opacity:1, scale:1, ease: Power2.easeOut},12)
       .from("#bradFlare", 1.6, {x:-320, opacity:0,ease: Power3.easeOut}, "-=1.6")
       .from("#bradFooterCTA", .8, {clip:"rect(0px 0px 138px 0px)", opacity:0,ease: Power3.easeOut}, "-=1.4")
       .from("#bradFooterCTAT", .8, {opacity:0, ease: Power3.easeOut}, "-=.6")
       .from("#bradKidneyFlare", 1.6, {opacity:0, ease: Power3.easeOut}, "-=.6");
    
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
    TweenLite.set("#bradSvg2Container", {opacity:.8});
    TweenLite.set("#bradSvg2Container", { scale:.4, rotation:180, x:-350, y:-200, opacity:.8});
    TweenLite.set("#bradKidney", { scale:.1});
    //$('#adTxt3').css('opacity', '0');
    addListeners();
    playAd();
});

var tl = new TimelineLite({onUpdate:updateSlider});
tl.eventCallback("onComplete", animationComplete);