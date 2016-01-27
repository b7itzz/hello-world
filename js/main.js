
(function( $ ) {
  $.fn.ucDropDown = function(options) {
  
	//variables or strings
		
	
	//default Options
  	this.defaultOptions = {
	  speed: 300,
	  dataAttr: "ucDropDown",
	  bgColor: "#002533",
	  textColor: "#ffffff"
	};
	//combining the default options with the user inputed options
	options = $.extend({}, this.defaultOptions, options); 
	
	
//	console.log(this.data();
	
     this.each(function(){
		
	  e = $(this);
	  	  
	  e.hover(function(){
		  		 
		  var element = $(this);	 
		  var position = element.position();
		  var height = element.outerHeight();
		  var width = element.outerWidth();
		  var margintop = parseInt(element.css("marginTop"));
		  var marginleft = parseInt(element.css("marginLeft"));
		  		  
		  e.dropdown = $("<div />").addClass("uc-dropdown")
			  .html("<div id=\"arrow\"></div><div id=\"innerwrapper\"><div id=\"text\">"+$(this).data(options.dataAttr)+"</div></div>")
			  .appendTo("body");
			  
			$(".uc-dropdown #arrow").css({
			
				"border-bottom": "20px solid "+options.bgColor
	  		});  

			$(".uc-dropdown #innerwrapper").css({
					
					backgroundColor: options.bgColor,
					color: options.textColor	
			
			});						  
			

			 e.dropdown.css({
			  left: (position.left+marginleft+width/2)-(e.dropdown.width()/2),
			  top: position.top+margintop+height,
			  })
			  .hide()
			  .slideToggle(options.speed);
	  },function(){
		  e.dropdown.slideToggle(options.speed, function(){
				$(this).remove();  
			  });
		  });
	  });	
	

  
  }
})( jQuery );