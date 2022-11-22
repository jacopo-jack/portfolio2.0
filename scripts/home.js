var app = (function() {
    /*propetries */
    var websiteName = "PetShop";
    /*methods*/
    return{
        getWebsiteName: function() {
            return websiteName;
        }
    }
}) ();
function HomeIndex() {
    $(document).ready(function(){
        /* instantiate new home class */
        /*$() selettori jquery */
      app.HomeIndex = new HomeIndex();
      const heightFromTop = 300;
      /* methods */
      this.initialiseScrollToTopButton = function () {
      $(window).scroll(function(){
          var verticalHeight = $(this).scrollTop();
          if (verticalHeight > heightFromTop){
              $("scrollInizioPag").fadeIn();
          } else {
              $("scrollingInizioPag").fadeOut();
          }
      })
        /*event handler */
        $("#scrollingInizioPag").click(function(){
            $("html, body").animate({scrollTop: 0 },"slow");
        })
        /* inisialize the scroll to top button */
      app.homeIndex.initialiseScrollToTopButton();
      }
    });
}