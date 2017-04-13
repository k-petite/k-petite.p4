var value;
var searchfrom = document.getElementsByTagName('a');

for (var i = 0; i < 12; i+=1){
  var firstAttr = searchfrom[i].getAttribute("data-sub-html");
  console.log(firstAttr);
  
};


function myFunction() {
var x = document.getElementById("search").value;
    console.log(x);
}

value = myFunction();

if (value === 'null') {$('a').css('background', 'red')}
else if (value === firstAttr.toLowerCase()) {$('body').css('background', 'red')}
else if (value !== firstAttr.toLowerCase()) {console.log('none')}
else {console.log('??')};



//var result = $(function myFunction() {
//
//  $( "input" ).keyup(function() {
//  var value = $( 'input' ).val(); });
//  return value;
//});
                                               
//
//var puk=$('a').attr("data-sub-html");
//console.log(puk);
//
//for (var i = 0; i < 12; i+=1) {
//$('input').keyup(function(){
//  $('a')[i].each(function(){console.log(
//    puk);
//    });
//})};


//}

//
//var myValue = $("#search").val();
//console.log(myValue);

//var searchfrom = document.getElementsByTagName("a").getAttribute("data-sub-html");
//console.log(searchfrom);

// If condition
//if (value === 'undefined') {$('a').css('background', 'red')}
//    else if (value === search) {$('body').css('background', 'red')}
//    else if (value !== search) {console.log('none')};
//    else 
//  })


//========Below are the old drafts=========

//
//  var search = $( "input" )
//  .keyup(function() {
//    var value = $( this ).val();
//    $( "p" ).text( value );
//  }).keyup();


//$("a[data-sub-html*= 'p' ]").css("background-color", "yellow");

//var caption = document.getElementsByTagName("a");
//console.log(caption);





//function myFunction() {
//    var x = document.getElementsByTagName("a").getAttribute("data-sub-html"); 
//    document.getElementsByTagName("a").innerHTML = x;
//};
//
//myFunction();
//  console.log(x);

//-
//$(document).ready(function(){
//    $('input').on('input', function(){
//        console.log;
//    });
//});
//
//if ($("a").attr("data-sub-html").)
//


//-
//	(function ($) {
//	  jQuery.expr[':'].Contains = function(a,i,m){
//		  return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
//	  };
//	 
//	  function listFilter(lightgallery) {
//		var form = $("<form>").attr({"class":"filterform","action":"#"}),
//			input = $("<input>").attr({"class":"filterinput","type":"text"});
//		$(form).append(input);
//	 
//		$(input)
//		  .change( function () {
//			var filter = $(this).val();
//			if(filter) {
//			  $(lightgallery).find("a['data-sub-html']:not(:Contains(" + filter + "))").parent().slideUp();
//			  $(lightgallery).find("a['data-sub-html']:Contains(" + filter + ")").parent().slideDown();
//			} else {
//			  $(lightgallery).find("a").slideDown();
//			}
//			return false;
//		  })
//		.keyup( function () {
//			$(this).change();
//		});
//	  }
//	
//	  $(function () {
//		listFilter($("#lightgallery"));
//	  });
//	}(jQuery));




// -
//$( "input" )
//  .keyup(function() {
//    var value = $( this ).val();
//    $( "p" ).text( value );
//  }).keyup();
//console.log(value);
//
//
//var search =  value;
//
//$("#w3s").attr("href")
//
//  
////    

//
