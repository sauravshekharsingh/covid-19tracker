$.getJSON("https://api.covid19api.com/summary",function(data1){
	var date = data1.Date;
	$(".updated-date").append(" " + date.slice(0,10));
	$(".updated-time").append(" " + date.slice(11,19));
	$(".confirmed-no").append(numberWithCommas(data1.Global.TotalConfirmed));
	$(".death-no").append(numberWithCommas(data1.Global.TotalDeaths));
	$(".recovered-no").append(numberWithCommas(data1.Global.TotalRecovered));
	$(".confirmed-no-new").append(numberWithCommas(data1.Global.NewConfirmed));
	$(".death-no-new").append(numberWithCommas(data1.Global.NewDeaths));
	$(".recovered-no-new").append(numberWithCommas(data1.Global.NewRecovered));
	var totalCountries = data1.Countries.length;
	for(i=0 ; i<totalCountries ; i++){
		var country = data1.Countries[i].Country;
		if(country=="India"){
			break;
		}
	}
	$(".confirmed-no-india").append(numberWithCommas(data1.Countries[i].TotalConfirmed));
	$(".death-no-india").append(numberWithCommas(data1.Countries[i].TotalDeaths));
	$(".recovered-no-india").append(numberWithCommas(data1.Countries[i].TotalRecovered));
	$(".confirmed-no-india-new").append(numberWithCommas(data1.Countries[i].NewConfirmed));
	$(".death-no-india-new").append(numberWithCommas(data1.Countries[i].NewDeaths));
	$(".recovered-no-india-new").append(numberWithCommas(data1.Countries[i].NewRecovered));
});

$.getJSON("https://data.covid19india.org/data.json",function(data2){
	var totalStates = data2.statewise.length;
	for(i=0 ; i<totalStates ; i++){
		if(data2.statewise[i].state=="State Unassigned"){
			continue;
		}
		var statename = data2.statewise[i].state;
		var confirmed = data2.statewise[i].confirmed;
		var deaths = data2.statewise[i].deaths;
		var recovered = data2.statewise[i].recovered;
		$(".statedatatable").after("<tr><td class='namestate'>" + statename + "</td>" + "<td class='cnf'>" + confirmed + "</td>" + "<td class='dth'>" + deaths + "</td>" + "<td class='rec'>" + recovered + "</td></tr>");
	}
});

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}




/*******************************************************************************************************************************************************************/
(function($) {
  "use strict"; // Start of use strict
	
	
 // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict




