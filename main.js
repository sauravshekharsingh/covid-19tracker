$.getJSON("https://api.covid19api.com/summary",function(data){
	var date = data.Date;
	$(".updated-date").append(" " + date.slice(0,10));
	$(".updated-time").append(" " + date.slice(11,19));
	$(".confirmed-no").append(numberWithCommas(data.Global.TotalConfirmed));
	$(".death-no").append(numberWithCommas(data.Global.TotalDeaths));
	$(".recovered-no").append(numberWithCommas(data.Global.TotalRecovered));
	$(".confirmed-no-new").append(numberWithCommas(data.Global.NewConfirmed));
	$(".death-no-new").append(numberWithCommas(data.Global.NewDeaths));
	$(".recovered-no-new").append(numberWithCommas(data.Global.NewRecovered));
	var totalCountries = data.Countries.length;
	for(i=0 ; i<totalCountries ; i++){
		var country = data.Countries[i].Country;
		if(country=="India"){
			break;
		}
	}
	$(".confirmed-no-india").append(numberWithCommas(data.Countries[i].TotalConfirmed));
	$(".death-no-india").append(numberWithCommas(data.Countries[i].TotalDeaths));
	$(".recovered-no-india").append(numberWithCommas(data.Countries[i].TotalRecovered));
	$(".confirmed-no-india-new").append(numberWithCommas(data.Countries[i].NewConfirmed));
	$(".death-no-india-new").append(numberWithCommas(data.Countries[i].NewDeaths));
	$(".recovered-no-india-new").append(numberWithCommas(data.Countries[i].NewRecovered));
});

$.getJSON("https://api.covid19india.org/data.json",function(data2){
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
