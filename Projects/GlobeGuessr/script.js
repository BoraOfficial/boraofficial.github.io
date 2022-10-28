/*

 .----------------.  .----------------.  .----------------.  .-----------------.
| .--------------. || .--------------. || .--------------. || .--------------. |
| | ____    ____ | || |      __      | || |     _____    | || | ____  _____  | |
| ||_   \  /   _|| || |     /  \     | || |    |_   _|   | || ||_   \|_   _| | |
| |  |   \/   |  | || |    / /\ \    | || |      | |     | || |  |   \ | |   | |
| |  | |\  /| |  | || |   / ____ \   | || |      | |     | || |  | |\ \| |   | |
| | _| |_\/_| |_ | || | _/ /    \ \_ | || |     _| |_    | || | _| |_\   |_  | |
| ||_____||_____|| || ||____|  |____|| || |    |_____|   | || ||_____|\____| | |
| |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------' 

*/

if($.cookie("streak") === undefined){
    var streak = 0;
} else {
    var streak = parseInt($.cookie("streak"));
}

function setVisible(){
    document.getElementById("finish").style.visibility = "visible";
}

function answer(bool, state, y){
    if(bool){
        streak += 1
        audio = document.createElement("audio")
        audio.src = "./static/sfx/win.wav";
        audio.setAttribute("id", "player")
        document.body.appendChild(audio)
        document.getElementById("player").play()

        document.cookie = "streak="+streak+"; expires=Thu, 18 Dec 3000 12:00:00 UTC"; 
        document.getElementById("row").innerHTML = $.cookie("streak")+" in a row!";
        document.getElementById("streak-count").innerHTML = "Damn, that's lit &#128293;";
        document.getElementById("correct").style.visibility = "visible";
        filter = document.createElement("img")
        filter.src = "./static/green.jpg";
        filter.setAttribute("id", "filter")
        filter.className += "won fader";
        document.body.appendChild(filter)
        document.getElementById("close").style.visibility = "hidden";
    } else {
        console.log(y)
        audio = document.createElement("audio")
        audio.src = "./static/sfx/lose.wav";
        audio.setAttribute("id", "player")
        document.body.appendChild(audio)
        document.getElementById("player").play()

        filter = document.createElement("img")
        filter.src = "./static/red.png";
        filter.setAttribute("id", "filter")
        filter.className += "lost fader";
        document.body.appendChild(filter)
        document.getElementById("filter").style.opacity = 0.5;
        document.body.className += " zoomloose";
        document.getElementById("close").style.visibility = "hidden";
        document.getElementById("correct-answer").innerHTML = "The correct answer was "+state.charAt(0).toUpperCase() + state.slice(1);
        document.getElementById("streak").innerHTML = `Your <b style="font-family: 'Fasthand', cursive;">`+$.cookie("streak")+"</b> in a row streak was broken!";
        setTimeout(setVisible, 5000);
        document.cookie = "streak=0; expires=Thu, 18 Dec 3000 12:00:00 UTC"; 
    

    

        
        
    }
}
function showMap(bool){
	if(bool){
		document.body.style.visibility = "hidden";
		document.getElementsByClassName("map-container")[0].style.visibility = "visible";
		document.getElementById("close").style.visibility = "visible";
	} else {
		document.body.style.visibility = "visible";
		document.getElementsByClassName("map-container")[0].style.visibility = "hidden";
		document.getElementById("close").style.visibility = "hidden";
	}

}

states = ["florida.png", "nevada.jpg", "washington.jpg", "california.jpeg", "idaho.jpg", "montana.jpg", "oregon.jpg", "wyoming.jpeg"]

function random(){
    return crypto.getRandomValues(new Uint32Array(1))[0]/2**32;
}



var rand_int = Math.floor(random()*states.length)
curr_image = states[rand_int];
window.onload = document.querySelector('a-sky').setAttribute('src', "./static/states/"+curr_image);





/*

 .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. |
| | ____    ____ | || |      __      | || |   ______     | |
| ||_   \  /   _|| || |     /  \     | || |  |_   __ \   | |
| |  |   \/   |  | || |    / /\ \    | || |    | |__) |  | |
| |  | |\  /| |  | || |   / ____ \   | || |    |  ___/   | |
| | _| |_\/_| |_ | || | _/ /    \ \_ | || |   _| |_      | |
| ||_____||_____|| || ||____|  |____|| || |  |_____|     | |
| |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------' 

*/

google.load('visualization', '1', {
    'packages': ['geochart', 'table']
});
google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
    // Don't worry about it...
    var regionDataArray = [
        ['Region', 'State',          'Is Capital', 'Other Data'],
        ['US-AL',  'Alabama',       0,              0],
        ['US-AK',  'Alaska',       0,              0],
        ['US-AZ',  'Arizona',       0,              0],
        ['US-AR',  'Arkansas',       0,              0],
        ['US-CA',  'California',       0,              0],
        ['US-CO',  'Colorado',       0,              0],
        ['US-CT',  'Connecticut',       0,              0],
        ['US-DE',  'Delaware',       0,              0],
        ['US-DC',  'District of Columbia',       0,              0],
        ['US-FL',  'Florida',       0,              0],
        ['US-GA',  'Georgia',       0,              0],
        ['US-HI',  'Hawaii',       0,              0],
        ['US-ID',  'Idaho',       0,              0],
        ['US-IL',  'Illinois',       0,              0],
        ['US-IN',  'Indiana',       0,              0],
        ['US-IA',  'Iowa',       0,              0],
        ['US-KS',  'Kansas',       0,              0],
        ['US-KY',  'Kentucky',       0,              0],
        ['US-LA',  'Louisiana',       0,              0],
        ['US-ME',  'Maine',       0,              0],
        ['US-MD',  'Maryland',       0,              0],
        ['US-MA',  'Massachusetts',       0,              0],
        ['US-MI',  'Michigan',       0,              0],
        ['US-MN',  'Minnesota',       0,              0],
        ['US-MS',  'Mississippi',       0,              0],
        ['US-MO',  'Missouri',       0,              0],
        ['US-MT',  'Montana',       0,              0],
        ['US-NE',  'Nebraska',       0,              0],
        ['US-NV',  'Nevada',       0,              0],
        ['US-NH',  'New Hampshire',       0,              0],
        ['US-NJ',  'New Jersey',       0,              0],
        ['US-NM',  'New Mexico',       0,              0],
        ['US-NY',  'New York',       0,              0],
        ['US-NC',  'North Carolina',       0,              0],
        ['US-ND',  'North Dakota',       0,              0],
        ['US-OH',  'Ohio',       0,              0],
        ['US-OK',  'Oklahoma',       0,              0],
        ['US-OR',  'Oregon',       0,              0],
        ['US-PA',  'Pennsylvania',       0,              0],
        ['US-PR',  'Puerto Rico',       0,              0],
        ['US-RI',  'Rhode Island',       0,              0],
        ['US-SC',  'South Carolina',       0,              0],
        ['US-SD',  'South Dakota',       0,              0],
        ['US-TN',  'Tennessee',       0,              0],
        ['US-TX',  'Texas',       0,              0],
        ['US-UT',  'Utah',       0,              0],
        ['US-VT',  'Vermont',       0,              0],
        ['US-VA',  'Virginia',       0,              0],
        ['US-VI',  'Virgin Islands',       0,              0],
        ['US-WA',  'Washington',       1,              0],
        ['US-WV',  'West Virginia',       0,              0],
        ['US-WI',  'Wisconsin',       0,              0],
        ['US-WY',  'Wyoming',       0,              0],
    ];

    var data = google.visualization.arrayToDataTable(regionDataArray);


    var view = new google.visualization.DataView(data);
    view.setColumns([1, 2]);

    var geoChart = new google.visualization.GeoChart(document.getElementById('chart'));

    var options = {
        region: 'US',
        resolution: 'provinces',
        width: 800,
        height: 500,
        /*legend: 'none',*/
        colorAxis: {
            colors: ['#acb2b9', '#2f3f4f']
        }
    };

    google.visualization.events.addListener(geoChart, 'regionClick', function (e) {
        $('#info').hide()

        var rowIdxs = data.getFilteredRows([{column: 0, value: e.region}]);

        if ((rowIdxs.length > 0)) {
            var i = rowIdxs[0];
            var stateName = data.getValue(i, 1);
            
            if(curr_image.split(".")[0] == stateName.toLowerCase()){
            	answer(true, curr_image.split(".")[0], stateName)
            } else{
            	answer(false, curr_image.split(".")[0], stateName)
            }
            
        } else {
            

        }
    });

    geoChart.draw(view, options);

};



