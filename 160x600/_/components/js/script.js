function startAd(){  
     var stl = new TimelineLite();
    stl.from('#bradSvg1Container', 15, {scale:1.5, x:-200, y:-160, rotationX:20, rotationY:30, rotationZ:-20, force3D:true})
       .to("#bradSvg2Container", 3, {rotationY:20, x:-210, scale:1, force3D:true}, 0)
       .to("#bradSvg2Container", 3, {rotationY:40,  x:-230, y: 10, scale:1.3, force3D:true}, 3)
        .to("#bradSvg2Container", 3, {rotationY:20,  x:-250, scale:1, z:0,force3D:true}, 6)
        .to("#bradSvg2Container", 3, {rotationY:0,  x:-230, y:30 }, 9)
        .to("#bradSvg2Container", 3, {opacity:0, scale:1.5, rotationY:-20,  x:-250,ease: Power3.easeOut }, 12);
    
    var ttl = new TimelineLite();
    ttl.from("#bradT1", .8, {y:-60, opacity:0,ease: Power3.easeOut}, 0)
       .to("#bradT1", .8, {y:-60, opacity:0,ease: Power3.easeOut}, 3)
       .from("#bradT2", .8, {x:-80, opacity:0,ease: Power3.easeOut}, "-=.4")
       .to("#bradT2", .8, {x:80, opacity:0,ease: Power3.easeOut}, "+=1")
       .from("#bradT3", .8, {y:-80, opacity:0,ease: Power3.easeOut}, "-=.4")
       .from("#bradT4", .8, {y:80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .to("#bradT3", .8, {x:-80, opacity:0,ease: Power3.easeOut}, "+=1")
       .to("#bradT4", .8, {x:-80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .from("#bradT5", .8, {x:-80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .from("#bradT6", .8, {x:80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .to("#bradT5", .8, {x:80, opacity:0,ease: Power3.easeOut}, "+=1")
       .to("#bradT6", .8, {x:80, opacity:0,ease: Power3.easeOut}, "-=.8")
       .from("#bradT7", .8, {y:-80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .to("#bradT7", .8, {y:80, opacity:0,ease: Power3.easeOut}, "+=1")
       .from("#bradT8", .8, {y:-80, opacity:0,ease: Power3.easeOut}, "-=.6")
       .from("#bradT9", .8, {y:-80, opacity:0,ease: Power3.easeOut}, "-=.8");
    
    var ctl = new TimelineLite();
        ctl.from("#bradKidney", 3, {opacity:0, scale:0,x:20, ease: Power2.easeOut})
       .from("#bradFlare", 1.5, {x:-120, opacity:0,ease: Power3.easeOut}, "-=1.6")
       .from("#bradCtaContainer", .8, {clip:"rect(0px 0px 146px 0px)", opacity:0,ease: Power3.easeOut}, "-=1.6")
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
    TweenLite.set('#bradSvg1Container', {rotationX:-35,rotationY:-10, rotationZ:-10, force3D:true, x:-170, y:110, scale:.7});
    TweenLite.set("#bradSvg2Container", { scale:.8, rotation:180, x:-200, y:60, opacity:.8});
    addListeners();
    startAd();
              } 
     }

window.addEventListener('load', checkInit);

var tl = new TimelineLite();

