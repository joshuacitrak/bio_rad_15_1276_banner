function playAd(){  
     var stl = new TimelineLite();
    stl.to("#bradSvg1Container", 15, {  x:120, y:135, scale:.5,rotation:-10}, "swoosh")
        .to("#bradSvg1Container", 7.5, { scale:.7,rotationX:-40,  z:100, force3D:true}, "swoosh")
       .to("#bradSvg2Container", 3, {rotationX:40, x:-190, scale:1.2, z:-300, force3D:true}, "swoosh")
       .to("#bradSvg2Container", 3, {rotationX:0,  x:-150, scale:1, z:-100,force3D:true}, 3)
       .to("#bradSvg1Container", 7.5, { scale:.6,rotationX:30,  z:0, force3D:true}, 7.5)
        .to("#bradSvg2Container", 3, {rotationX:-40,  x:-130, scale:1.2, z:0,force3D:true}, 6)
        .to("#bradSvg2Container", 3, {rotationX:-60,  x:-110 }, 9)
        .to("#bradSvg2Container", 3, {opacity:0, rotationX:-40,  x:-130, scale:1.4, ease: Power3.easeOut}, 12); 
    
    var ttl = new TimelineLite();
    ttl.from("#bradT1", .8, {y:-60, opacity:0,ease: Power3.easeOut}, 0)
       .to("#bradT1", .8, {y:-60, opacity:0,ease: Power3.easeOut}, 3)
       .from("#bradT2", .8, {x:-80, opacity:0,ease: Power3.easeOut}, "-=.4")
       .to("#bradT2", .8, {x:80, opacity:0,ease: Power3.easeOut}, "+=1")
       .from("#bradT3", .8, {y:-60, opacity:0,ease: Power3.easeOut}, "-=.4")
       .from("#bradT4", .8, {x:80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .to("#bradT3", .8, {x:-80, opacity:0,ease: Power3.easeOut}, "+=1")
       .to("#bradT4", .8, {x:-80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .from("#bradT5", .8, {y:-80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .from("#bradT6", .8, {y:120, opacity:0,ease: Power3.easeOut}, "-=.6")
       .to("#bradT5", .8, {x:80, opacity:0,ease: Power3.easeOut}, "+=1")
       .to("#bradT6", .8, {x:80, opacity:0,ease: Power3.easeOut}, "-=.8")
       .from("#bradT7", .8, {x:-80, opacity:0,ease: Power3.easeOut}, "-=.6")
        .from("#bradT8", .8, {x:-80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .to("#bradT7", .8, {x:80, opacity:0,ease: Power3.easeOut}, "+=1")
        .to("#bradT8", .8, {x:80, opacity:0,ease: Power3.easeOut}, "-=.8")
       .from("#bradT9", .8, {x:-80, opacity:0,ease: Power3.easeOut}, "-=.8")
        .from("#bradT10", .8, {x:-80, opacity:0,ease: Power3.easeOut}, "-=.6");
    
    var ctl = new TimelineLite();
        ctl.from("#bradKidney", 3, {opacity:0, scale:0,x:20, ease: Power2.easeOut})
       .from("#bradFlare", 1.5, {x:-120, opacity:0,ease: Power3.easeOut}, "-=1.6")
       .from("#bradCtaContainer", .8, {clip:"rect(0px 0px 142px 0px)", opacity:0,ease: Power3.easeOut}, "-=1.6")
       .from("#bradCta", .8, {opacity:0, ease: Power3.easeOut}, "-=.8")
       .from("#bradKidneyFlare", 1.5, {opacity:0, ease: Power3.easeOut}, "-=.6");
    
    tl.add(stl, 0)
    .add(ttl, 0)
    .add(ctl, 11.5);
    tl.totalDuration(15);
       
};

function addListeners(){
    document.getElementById("bradContent").addEventListener("click", clickthrough);
};

function clickthrough() {
    EB.clickthrough();
}


function animationComplete(evt){
};

function checkInit() {
              if (!EB.isInitialized()) {
                 EB.addEventListener(EBG.EventName.EB_INITIALIZED, onInit); 
                 // This code checks whether the EB object is initialized, if the object is initialized, it
                     //launches the function "onInit", otherwise "EB_INITIALIZED" event. 
              }
              else {
                      onInit();
               }         
               function onInit() {
                     CSSPlugin.defaultTransformPerspective = 750;
    TweenLite.set("#bradContainer", {opacity:1});
    TweenLite.set("#bradSvg2Container", {opacity:.8});
    TweenLite.set("#bradSvg2Container", { scale:.4, rotation:180, x:-350, y:-200, opacity:.8});
    addListeners();
    playAd();
              } 
     }

window.addEventListener('load', checkInit);

var tl = new TimelineLite({onUpdate:updateSlider});
tl.eventCallback("onComplete", animationComplete);

/** UI STUFF FOR DEV ONLY **/
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

