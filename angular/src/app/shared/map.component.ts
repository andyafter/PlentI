import { Component } from '@angular/core'

declare var google: any;

@Component({
    selector: 'app-map',
    template: `
        <div>
            <div id="map" style="width: 500px; height: 400px;"></div>

            <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDZTu_Sr0nQntcQ7_VhmXwdgPg_zWvzicw&callback=initMap" type="text/javascript"></script>

        <script>
            var map;
            function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 8
                });
            }
        </script>
        </div>
    `
})

export class MapComponent{
    // here should be restful API to fetch and modify data
    private _apikey = 'AIzaSyDZTu_Sr0nQntcQ7_VhmXwdgPg_zWvzicw';

    constructor(){

        console.log('Map Initialized');
    }

    ngOnInit(){
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: {lat: 1.35, lng: -103.81}
        });
        directionsDisplay.setMap(map);
        this.calculateAndDisplayRoute(directionsService, directionsDisplay);
    }

    calculateAndDisplayRoute(directionsService, directionsDisplay) {

        var waypts = [];
        var checkboxArray:any[] = [
                'winnipeg', 'regina','calgary'
        ];
        for (var i = 0; i < checkboxArray.length; i++) {
            
            waypts.push({
                location: checkboxArray[i],
                stopover: true
            });
            
        }
        
        directionsService.route({
            origin: {lat: 41.85, lng: -87.65},
            destination: {lat: 49.3, lng: -123.12},
            waypoints: waypts,
            optimizeWaypoints: true,
            travelMode: 'DRIVING'
        }, function(response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }
}
