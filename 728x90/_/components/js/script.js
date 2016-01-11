function startAd(){  
    
    var stl = new TimelineLite();
    stl.from('#bradSvg1Container', 15, {scale:1.5, x:-200, y:-190, rotationX:20, force3D:true})
       .to("#bradSvg2Container", 3, {rotationX:40, x:70, scale:0.9, z:-300, force3D:true}, 0)
       .to("#bradSvg2Container", 3, {rotationX:0,  x:40, scale:1.2, z:-100,force3D:true}, 3)
        .to("#bradSvg2Container", 3, {rotationX:-40,  x:10, scale:.9, z:0,force3D:true}, 6)
        .to("#bradSvg2Container", 3, {rotationX:0,  x:-20 }, 9)
        .to("#bradSvg2Container", 3, {opacity:0, scale:1.4, rotationX:-40,  x:-50,ease: Power3.easeOut }, 12);
    
    var ttl = new TimelineLite();
    ttl.from("#bradT1", .8, {y:-50, opacity:0,ease: Power3.easeOut}, 0)
       .to("#bradT1", .8, {y:-50, opacity:0,ease: Power3.easeOut}, 3)
       .from("#bradT2", .8, {x:-80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .to("#bradT2", .8, {x:140, opacity:0,ease: Power3.easeOut}, "+=1.2")
       .from("#bradT3", .8, {y:-80, opacity:0,ease: Power3.easeOut}, "-=.8")
       .from("#bradT4", .8, {x:80, opacity:0,ease: Power3.easeOut}, "-=.8")
       .to("#bradT3", .8, {y:-80, opacity:0,ease: Power3.easeOut}, "+=1.2")
       .to("#bradT4", .8, {x:80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .from("#bradT5", .8, {y:-80, opacity:0,ease: Power3.easeOut}, "-=.8")
       .from("#bradT6", .8, {y:120, opacity:0,ease: Power3.easeOut}, "-=.8")
       .to("#bradT5", .8, {x:80, opacity:0,ease: Power3.easeOut}, "+=1.2")
       .to("#bradT6", .8, {x:80, opacity:0,ease: Power3.easeOut}, "-=.8")
       .from("#bradT7", .8, {x:-80, opacity:0,ease: Power3.easeOut}, "-=.8")
       .to("#bradT7", .8, {x:80, opacity:0,ease: Power3.easeOut}, "+=1.4")
       .from("#bradT8", .8, {y:-80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .from("#bradT9", .8, {y:-80, opacity:0,ease: Power3.easeOut}, "-=.8");
    
    var ctl = new TimelineLite();
        ctl.from("#bradKidney", 3, {opacity:0, scale:0,x:-20, ease: Power2.easeOut})
       .from("#bradFlare", 1.5, {x:-320, opacity:0,ease: Power3.easeOut}, "-=1.6")
       .from("#bradCtaContainer", .8, {clip:"rect(0px 0px 170px 0px)", opacity:0,ease: Power3.easeOut}, "-=1.4")
       .from("#bradCta", .8, {opacity:0, ease: Power3.easeOut}, "-=.6")
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
    TweenLite.set("#bradContainer", {opacity:1});
    TweenLite.set('#bradSvg1Container', {scale:.7, x:200, y:-200, opacity:.8});
    TweenLite.set("#bradSvg2Container", { scale:.6, rotation:180, x:100, y:-180, opacity:.8});
    addListeners();
    startAd();
              } 
     }

window.addEventListener('load', checkInit);


var tl = new TimelineLite();
tl.eventCallback("onComplete", animationComplete);