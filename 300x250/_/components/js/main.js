function playAd(){  
    
    var ntl = new TimelineLite();
    ntl.to("#bradSvg1Container", 6, {  x:60, y:53, scale:.7,rotationX:-20,  z:100, force3D:true}, "swoosh")
       .to("#bradSvg2Container", 3, {rotationX:60, x:-200, scale:0.9, z:-300, force3D:true}, "swoosh")
       .to("#bradSvg2Container", 3, {rotationX:0,  x:-150, scale:0.7, z:-100,force3D:true}, "-=4")
       .to("#bradSvg2Container", 3, {rotationX:-60,  x:-100, z:0,force3D:true}, "-=2")
       .to("#bradSvg1Container", 6, {  x:120, y:105, scale:.5,rotation:-10,  z:0, force3D:true}, "-=6")
       .to("#bradSvg2Container", 3, {rotationX:0,  x:-50, opacity:0}, "-=3"); 
    
   tl.add(ntl)
       .to("#bradT1", .6, {y:-30, opacity:0,ease: Power3.easeOut}, "-=5")
       .to("#bradT2", .6, {x:87, opacity:1,ease: Power3.easeOut}, "-=4.5")
       .to("#bradT2", .6, {x:-10, opacity:0,ease: Power3.easeOut}, "-=2.8")
       .to("#bradT3", .6, {y:143, opacity:1,ease: Power3.easeOut}, "-=2.8")
       .to("#bradT4", .6, {x:-230, opacity:1,ease: Power3.easeOut}, "-=2.7");
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
    //$('#adTxt3').css('opacity', '0');
    addListeners();
    playAd();
});

var tl = new TimelineLite({onUpdate:updateSlider});
tl.eventCallback("onComplete", animationComplete);