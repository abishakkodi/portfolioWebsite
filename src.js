var Job = Backbone.Model.extend({});
var unitrans = new Job();
// var unitrans.set('start','November 2011');

var renderJob = function(job){

  var html =   ['<div>','<span>',job.get('job description'),'</span>','</div>','</br>'].join('');
$('body').append(html);
};


var reveal = function(){
  this.toggle();
}



$( "li" ).click(function() {
  $( this ).slideUp();
});


