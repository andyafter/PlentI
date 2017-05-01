"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MapComponent = (function () {
    function MapComponent() {
        // here should be restful API to fetch and modify data
        this._apikey = 'AIzaSyDZTu_Sr0nQntcQ7_VhmXwdgPg_zWvzicw';
        console.log('Map Initialized');
    }
    MapComponent.prototype.ngOnInit = function () {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: { lat: 1.35, lng: -103.81 }
        });
        directionsDisplay.setMap(map);
        //this.calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    MapComponent.prototype.calculateAndDisplayRoute = function (directionsService, directionsDisplay) {
        var waypts = [];
        var checkboxArray = [
            'winnipeg', 'regina', 'calgary'
        ];
        for (var i = 0; i < checkboxArray.length; i++) {
            waypts.push({
                location: checkboxArray[i],
                stopover: true
            });
        }
        directionsService.route({
            origin: { lat: 41.85, lng: -87.65 },
            destination: { lat: 49.3, lng: -123.12 },
            waypoints: waypts,
            optimizeWaypoints: true,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    return MapComponent;
}());
MapComponent = __decorate([
    core_1.Component({
        selector: 'app-map',
        template: "\n        <div>\n            <div id=\"map\" style=\"width: 500px; height: 400px;\"></div>\n            <script>\n             var map;\n             function initMap() {\n                 map = new google.maps.Map(document.getElementById('map'), {\n                     center: {lat: 1.35, lng: -103.81},\n                     zoom: 2\n                 });\n             }\n            </script>\n\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [])
], MapComponent);
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map