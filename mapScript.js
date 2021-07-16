


//customer marker icon
const myIcon = L.icon({
    iconUrl: 'mapIcon2.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    //shadowUrl: 'mapIcon.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

//
let tagContents = [];
let map;


//function to load the map
function loadMap(){ 
 if( navigator.geolocation){
        navigator.geolocation.getCurrentPosition(
            //success call back
            function(position){
                const {latitude} = position.coords;
                const {longitude} = position.coords;
                const coordinates = [latitude, longitude];
                console.log(coordinates);  //-37.9189, 145.126
                 map = L.map('map-div').setView(coordinates, 13);

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(map);
                
                //To check click action on map
                map.on('click',function(event){

                    const val = prompt("Enter tag for the location");
                    if(!val)
                        return; 
                    
                    
                     const {lat, lng} = event.latlng;
                     console.log(lat, lng);
                     tagContents.push({
                        'tagVal':val,
                        'lat':lat,
                        'lng':lng
                    });
                    //  const tag = new Tag();
                    //  tag.tagVal = val;
                    //  tag.lng = lng.toString();
                    //  tag.lat = lat.toString();
                     //tagContents.push(tag);
                     console.log(tagContents);
                     L.marker([lat, lng]).addTo(map)
                    .bindPopup(val, 
                        L.popup(
                            {maxWidth:250,
                             mindWidth: 100,
                             autoClose:false,
                             closeOnClick:false,
                             className:'pop-up'
               }))
                    .openPopup();

                    //Storing to local storage
                    localStorage.setItem("tags",JSON.stringify(tagContents));
                })
                
                

                //To add marker
                L.marker(coordinates, {icon:myIcon}).addTo(map)
                    .bindPopup("User location"
                        )
                    .openPopup();

                //Method to load previously created markers
                showExistingMarkers();
                
            },

            //failed callback
            function(){
                alert("Couldnot get the location !!")
            }
        )
    }
}

//Function to load already created markers
const loadExistingMarkers = function(){
    const existTags = localStorage.getItem("tags");
    if(existTags.length>0){
        tagContents = JSON.parse(existTags);
    }
}

//Show tags
const showExistingMarkers = function(){
    if(tagContents.length>0){
            //Creating the tags
            tagContents.forEach((t) => {
                L.marker([t['lat'], t['lng']]).addTo(map)
                .bindPopup( 
                    L.popup(
                        {maxWidth:250,
                         mindWidth: 100,
                         autoClose:false,
                         closeOnClick:false,
                         className:'pop-up'
           }))
           .setPopupContent(t['tagVal'])
                .openPopup();
            })
            
        
    }
}

loadExistingMarkers();


// document.getElementById("map").addEventListener('click',loadMap); // Only to load map
