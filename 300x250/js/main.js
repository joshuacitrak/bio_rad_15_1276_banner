function playAd(){var ntl=new TimelineLite;ntl.to("#bradSvg1Container",13,{x:120,y:105,scale:.5,rotation:-10},"swoosh").to("#bradSvg1Container",6.5,{scale:.7,rotationX:-40,z:100,force3D:!0},"swoosh").to("#bradSvg2Container",3,{rotationX:60,x:-200,scale:.9,z:-300,force3D:!0},"swoosh").to("#bradSvg2Container",3,{rotationX:0,x:-150,scale:.7,z:-100,force3D:!0},3).to("#bradSvg1Container",6.5,{scale:.5,rotationX:40,z:0,force3D:!0},6).to("#bradSvg2Container",3,{rotationX:-60,x:-100,z:0,force3D:!0},6).to("#bradSvg2Container",3,{opacity:0,rotationX:0,x:-50},9),tl.add(ntl).to("#bradT1",.8,{y:46,opacity:1,ease:Power3.easeOut},0).to("#bradT1",.8,{y:-30,opacity:0,ease:Power3.easeOut},3).to("#bradT2",.8,{x:108,opacity:1,ease:Power3.easeOut},3.4).to("#bradT2",.8,{x:-10,opacity:0,ease:Power3.easeOut},4.5).to("#bradT3",.8,{y:143,opacity:1,ease:Power3.easeOut},4.6).to("#bradT4",.8,{x:-234,opacity:1,ease:Power3.easeOut},4.7).to("#bradT3",.8,{y:0,opacity:0,ease:Power3.easeOut},5.9).to("#bradT4",.8,{x:0,opacity:0,ease:Power3.easeOut},5.9).to("#bradT5",.8,{y:50,opacity:1,ease:Power3.easeOut},6.1).to("#bradT6",.8,{y:-163,opacity:1,ease:Power3.easeOut},6.2).to("#bradT5",.8,{x:250,opacity:0,ease:Power3.easeOut},7.4).to("#bradT6",.8,{x:250,opacity:0,ease:Power3.easeOut},7.4).to("#bradT7",.8,{x:125,opacity:1,ease:Power3.easeOut},7.5).to("#bradT8",.8,{x:125,opacity:1,ease:Power3.easeOut},7.6).to("#bradKidney",3,{opacity:1,scale:1,ease:Power2.easeOut},9.2).to("#bradT7",.8,{x:300,opacity:0,ease:Power3.easeOut},9.2).to("#bradT8",.8,{x:300,opacity:0,ease:Power3.easeOut},9.3).from("#bradT9",.8,{x:-40,opacity:0,ease:Power3.easeOut},9.4).from("#bradT10",.8,{x:-60,opacity:0,ease:Power3.easeOut},9.5).from("#bradFlare",1.6,{x:-320,opacity:0,ease:Power3.easeOut},9.7).from("#bradFooterCTA",.8,{clip:"rect(0px 0px 138px 0px)",opacity:0,ease:Power3.easeOut},10.8).from("#bradFooterCTAT",.8,{opacity:0,ease:Power3.easeOut},11.4).from("#bradKidneyFlare",1.6,{opacity:0,ease:Power3.easeOut},11.4)}function addListeners(){}function animationComplete(evt){}function updateSlider(){$("#slider").slider("value",100*tl.progress())}$("#play").click(function(){1!=tl.progress()?tl.play():tl.restart()}),$("#pause").click(function(){tl.pause()}),$("#restart").click(function(){tl.restart()}),$("#slider").slider({range:!1,min:0,max:100,step:.1,slide:function(event,ui){tl.pause(),tl.progress(ui.value/100)}}),$(document).ready(function(){TweenLite.set("#bradContainer",{opacity:1}),TweenLite.set("#bradSvg2Container",{opacity:.8}),TweenLite.set("#bradSvg2Container",{scale:.4,rotation:180,x:-350,y:-200,opacity:.8}),TweenLite.set("#bradKidney",{scale:.1}),addListeners(),playAd()});var tl=new TimelineLite({onUpdate:updateSlider});tl.eventCallback("onComplete",animationComplete);