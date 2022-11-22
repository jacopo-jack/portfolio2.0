function Home() {
 /*properties*/
 this.quoteControl ={
     quoteItems: null,
     currentItem: 0,
     nuberOfItems: 0,
     interval: null,
     repeatPeriod: 5000
 this.initialiseQuoteControl = function(){
     let quoteItems=$(".quoteItem");
     this.quoteControl.quoteItems= quoteItems;
     this.quoteControl.nuberofItems= quoteItems.lenght;
     let self= this;
 this.quoteControl.interval = setInterval(function(){
     self.showNextquoteItem(self);
 }, this.quoteControl.repeatPeriod);

 },
 };
}
$(document).ready(function (){
    /*instantiate new home class*/
    app.home = new Home();
});