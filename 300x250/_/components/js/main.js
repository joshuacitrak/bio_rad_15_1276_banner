(function() {
    
    // --------------------- UI ------------------------------//
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
    
    var slider = $("#slider"),
    sliderValue = {value:0};

   slider.slider({
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

    function updateSlider() {
      $("#slider").slider("value", tl.progress() *100);
    }             
})();