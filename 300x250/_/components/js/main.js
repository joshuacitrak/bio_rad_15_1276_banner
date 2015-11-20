function playAd(){  
    
    var ntl = new TimelineLite();
    ntl.to("#bradSvg1Container", 14, {  x:120, y:105, scale:.5,rotation:-10}, "swoosh")
        .to("#bradSvg1Container", 7, { scale:.7,rotationX:-40,  z:100, force3D:true}, "swoosh")
       .to("#bradSvg2Container", 4, {rotationX:60, x:-200, scale:0.9, z:-300, force3D:true}, "swoosh")
       .to("#bradSvg2Container", 4, {rotationX:0,  x:-150, scale:0.7, z:-100,force3D:true}, 4)
       .to("#bradSvg1Container", 7, { scale:.5,rotationX:40,  z:0, force3D:true}, 6)
        .to("#bradSvg2Container", 4, {rotationX:-60,  x:-100, z:0,force3D:true}, 8)
        .to("#bradSvg2Container", 2, {opacity:0, rotationX:0,  x:-50 }, 12); 
    
   tl.add(ntl)
       .to("#bradT1", .8, {y:46, opacity:1,ease: Power3.easeOut}, 0)
       .to("#bradT1", .8, {y:-30, opacity:0,ease: Power3.easeOut}, 3)
       .to("#bradT2", .8, {x:108, opacity:1,ease: Power3.easeOut}, 3.4)
       .to("#bradT2", .8, {x:-10, opacity:0,ease: Power3.easeOut}, 4.5)
       .to("#bradT3", .8, {y:143, opacity:1,ease: Power3.easeOut}, 4.6)
       .to("#bradT4", .8, {x:-234, opacity:1,ease: Power3.easeOut}, 4.7)
       .to("#bradT3", .8, {y:0, opacity:0,ease: Power3.easeOut}, 5.9)
       .to("#bradT4", .8, {x:0, opacity:0,ease: Power3.easeOut}, 5.9)
       .to("#bradT5", .8, {y:50, opacity:1,ease: Power3.easeOut}, 6.1)
       .to("#bradT6", .8, {y:-163, opacity:1,ease: Power3.easeOut}, 6.2)
       .to("#bradT5", .8, {x:250, opacity:0,ease: Power3.easeOut}, 7.4)
       .to("#bradT6", .8, {x:250, opacity:0,ease: Power3.easeOut}, 7.4)
       .to("#bradT7", .8, {x:125, opacity:1,ease: Power3.easeOut}, 7.5)
       .to("#bradT8", .8, {x:125, opacity:1,ease: Power3.easeOut}, 7.6)
       .to("#bradKidney", 3, {opacity:1, scale:1, ease: Power2.easeOut}, 8);
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
    TweenLite.set("#bradKidney", { scale:.4});
    //$('#adTxt3').css('opacity', '0');
    addListeners();
    playAd();
});

var tl = new TimelineLite({onUpdate:updateSlider});
tl.eventCallback("onComplete", animationComplete);