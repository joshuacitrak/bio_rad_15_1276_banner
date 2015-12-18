function playAd(){  
    
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
    //TweenLite.set("#bradSvg2Container", {opacity:.8});
    //TweenLite.set("#bradSvg2Container", { scale:.4, rotation:180, x:-350, y:-200, opacity:.8});
    //TweenLite.set("#bradKidney", { scale:.1});
    //$('#adTxt3').css('opacity', '0');
    addListeners();
    playAd();
});

var tl = new TimelineLite({onUpdate:updateSlider});
tl.eventCallback("onComplete", animationComplete);