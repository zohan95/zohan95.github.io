const indexLink = "https://restcountries.eu/rest/v2/alpha/"





function renderData(data) {
    const container = $('.container');
    var titleCountry = $(document.createElement('h1'))
    titleCountry.addClass('header')
    titleCountry.text(data['name'])
    container.append(titleCountry)
    let flagDiv = $(document.createElement('div'))
    flagDiv.addClass('text-center')
    let flagImg = $(document.createElement('img'))
    flagImg.attr('src',data['flag'])
    flagImg.addClass('img-fluid max-width: 100% rounded')
    flagImg.css('max-height','200px')
    flagDiv.append(flagImg)
    container.append(flagDiv)
    
    for(var key in data){
    	if (typeof(data[key])!='object'){
    	let countryDiv = $(document.createElement('div'));
    	countryDiv.addClass('country');
        let countryP = $(document.createElement('p'));
        countryP.text(key)
        countryP.css('color', 'white')
        countryP.css('float','left')
        let countryP2 = $(document.createElement('p'));
        countryP2.attr('class','data')
        countryP2.text(data[key]);
        countryP2.css('color', 'white')
        countryDiv.append(countryP);
        countryDiv.append(countryP2);
        container.append(countryDiv);
    	}
    }
    
}

function jqueryParseData(response, status) {
    console.log(response);
    console.log(status);
    renderData(response);
}

function jqueryAjaxError(response, status) {
    console.log(response);
    console.log(status);
    console.log('error');
}

function jqueryLoadIndex(paramUrl) {
    $.ajax({
        url: paramUrl,
        method: 'GET',
        success: jqueryParseData,
        error: jqueryAjaxError
    });
}

function getUrl(){
	var urlParams = new URLSearchParams(window.location.search);
	var param = urlParams.get('code')
	console.log(param)
	jqueryLoadIndex(indexLink+param)
}

$(document).ready(function() {
    getUrl();
});