function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  if(window.onload==document.getElementById('img2')){
    
  }
  // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Function For the Site map
function lat(position){
    return position.coords.latitude
    console.log
}
function lng (position){
    return position.coords.longitude
}

lat()

function loadMap(){
    var coords = new google.maps.LatLng(9.0570752,7.471104)
    var options = {
        zoom:16,
        center:coords,
        mapTypeId:google.maps.MapTypeId.HYBRID
    }
    var myMap = new google.maps.Map(document.getElementById("map_canvas"),options)

    var marker = new google.maps.Marker({
        position: coords, 
        map:myMap,
        title: "Aptech Garki area 11 Gimbiya Street"
    })
}