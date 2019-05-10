import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leafletmap',
  templateUrl: './leafletmap.component.html',
  styleUrls: ['./leafletmap.component.css']
})
export class LeafletmapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //leaflet map
var map = L.map('mapid').setView([-6.72811, 147.00072], 15);
//http://{s}.tile.osm.org/{z}/{x}/{y}.png
L.tileLayer('https://api.mapbox.com/styles/v1/anapitalai/cjl1jnjkk5ril2rs8z59ed71q/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5hcGl0YWxhaSIsImEiOiI1MzQ1MWViYmRiZjg4ZTA2YWI1ZjllNjg3NjkzYjZkNyJ9.7RJTLGvA02y-8SZZBGqbyQ', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
//https://api.mapbox.com/styles/v1/anapitalai/cjl1jnjkk5ril2rs8z59ed71q.html?fresh=true&title=true&access_token=pk.eyJ1IjoiYW5hcGl0YWxhaSIsImEiOiI1MzQ1MWViYmRiZjg4ZTA2YWI1ZjllNjg3NjkzYjZkNyJ9.7RJTLGvA02y-8SZZBGqbyQ#17.8/63.658749/4.490430/0
L.marker([-6.72811, 147.00072]).addTo(map)
    .bindPopup('<h4>National Finance Office</h4>')
.openPopup();

//click events
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

  }

}
