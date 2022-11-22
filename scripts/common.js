function common(){
    /*proprieties */
    this.promoBar() = 
    {
       promoItems:  null,
       currentItem: 0,
       numberOfItems: 0,
    };
    this.startDelay() = function(){
        setTimeout(function(){
            self.showNextPromoItem()
        }, 4000);
    };
    this.showNextPromoItem = function (){
        /* fade out the current item */
        $(self.promoBar.promoItems).fadeOut("slow").promise().
        done(function(){
            /*increment current promo item current */
            if(self.promoBar.currentItem >= (self.promoBarnumberOfItems -1)){
                /* reset counter to zero */
                self.promoBar.currentItem = 0;
            } else {
                /* increase counter by 1 */
                self.promoBar.currentItem++;
            }
        })
    }
    /* fade in  the next item */
    $(self.promoBar.promoItems).eq(self.promoBar.currentItem).fadeIn("slow", function(){
        /*delay before showing next item */
        self.startDelay();
    })
}
/*$(document).ready(function(){
    app.common = new common();
    app.common.initialisePromo();*
});*/