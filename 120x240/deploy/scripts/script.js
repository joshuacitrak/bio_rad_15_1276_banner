function startAd(){var stl=new TimelineLite;stl.from("#bradSvg1Container",15,{scale:1.5,x:-100,y:-80,rotationX:20,rotationY:30,rotationZ:-20,force3D:!0}).to("#bradSvg2Container",3,{rotationY:20,x:-110,y:50,scale:1,force3D:!0},0).to("#bradSvg2Container",3,{rotationY:0,x:-130,y:0,scale:1.3,force3D:!0},3).to("#bradSvg2Container",3,{rotationY:20,x:-120,scale:1,z:0,force3D:!0},6).to("#bradSvg2Container",1.5,{rotationY:0,x:-100,scale:1.2,y:-50},9).to("#bradSvg2Container",3,{opacity:0,scale:1.5,rotationY:-20,x:-150,ease:Power3.easeOut},10.5);var ttl=new TimelineLite;ttl.from("#bradT1",.8,{y:-60,opacity:0,ease:Power3.easeOut},0).to("#bradT1",.8,{y:-60,opacity:0,ease:Power3.easeOut},3).from("#bradT2",.8,{x:-80,opacity:0,ease:Power3.easeOut},"-=.6").to("#bradT2",.8,{x:80,opacity:0,ease:Power3.easeOut},"+=1").from("#bradT3",.8,{y:-60,opacity:0,ease:Power3.easeOut},"-=.8").from("#bradT4",.8,{x:80,opacity:0,ease:Power3.easeOut},"-=.6").to("#bradT3",.8,{x:-80,opacity:0,ease:Power3.easeOut},"+=1").to("#bradT4",.8,{x:-80,opacity:0,ease:Power3.easeOut},"-=.6").from("#bradT5",.8,{y:-80,opacity:0,ease:Power3.easeOut},"-=.8").from("#bradT6",.8,{y:120,opacity:0,ease:Power3.easeOut},"-=1").to("#bradT5",.8,{x:80,opacity:0,ease:Power3.easeOut},"+=1").to("#bradT6",.8,{x:80,opacity:0,ease:Power3.easeOut},"-=.8").from("#bradT7",.8,{x:-80,opacity:0,ease:Power3.easeOut},"-=.8").from("#bradT8",.8,{x:-80,opacity:0,ease:Power3.easeOut},"-=.6").to("#bradT7",.8,{x:80,opacity:0,ease:Power3.easeOut},"+=1").to("#bradT8",.8,{x:80,opacity:0,ease:Power3.easeOut},"-=.8").from("#bradT9",.8,{x:-80,opacity:0,ease:Power3.easeOut},"-=.8").from("#bradT10",.8,{x:-80,opacity:0,ease:Power3.easeOut},"-=.6");var ctl=new TimelineLite;ctl.from("#bradKidney",3,{opacity:0,scale:0,x:20,ease:Power2.easeOut}).from("#bradFlare",1.5,{x:-120,opacity:0,ease:Power3.easeOut},"-=1").from("#bradCtaContainer",.8,{clip:"rect(0px 0px 105px 0px)",opacity:0,ease:Power3.easeOut},"-=1.5").from("#bradCta",.8,{opacity:0,ease:Power3.easeOut},"-=.8").from("#bradKidneyFlare",1.5,{opacity:0,ease:Power3.easeOut},"-=.8"),tl.add(stl,0).add(ttl,0).add(ctl,10.5),tl.totalDuration(15)}function addListeners(){document.getElementById("bradContent").addEventListener("click",clickthrough)}function clickthrough(){EB.clickthrough()}function animationComplete(evt){}function checkInit(){function onInit(){CSSPlugin.defaultTransformPerspective=750,TweenLite.set("#bradContainer",{opacity:1}),TweenLite.set("#bradSvg1Container",{rotationX:35,rotationZ:-30,x:-60,y:-35,force3D:!0,scale:.7}),TweenLite.set("#bradSvg2Container",{scale:.6,rotation:180,x:-150,y:-50,opacity:.8}),addListeners(),startAd()}EB.isInitialized()?onInit():EB.addEventListener(EBG.EventName.EB_INITIALIZED,onInit)}function updateSlider(){$("#slider").slider("value",100*tl.progress())}window.addEventListener("load",checkInit);var tl=new TimelineLite({onUpdate:updateSlider});tl.eventCallback("onComplete",animationComplete),$("#play").click(function(){1!=tl.progress()?tl.play():tl.restart()}),$("#pause").click(function(){tl.pause()}),$("#restart").click(function(){tl.restart()}),$("#slider").slider({range:!1,min:0,max:100,step:.1,slide:function(event,ui){tl.pause(),tl.progress(ui.value/100)}});