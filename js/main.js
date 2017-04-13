

function myFunction() {

  console.log('1');
    var input, filter, searchfrom, b, i, x;
    var searchfrom = document.getElementsByTagName('a');

    input = document.getElementById('search');
    filter = input.value.toUpperCase();
  console.log('2');
   
  // It loops through all list items, and hides those who don't match the search
    for (i = 0; i < 12; i++) {
        b = searchfrom[i].getAttribute("data-sub-html");
      
        b.toUpperCase().indexOf(filter);
     console.log('3');  
        if (b.toUpperCase().indexOf(filter) > -1) {
            searchfrom[i].style.display = "";
        } else {
            searchfrom[i].style.display = "none";
        }
    }
   console.log('4');
}
