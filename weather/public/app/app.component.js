if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var http_1 = require('angular2/http');
var chat_component_1 = require('./chat.component');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'S2 Weather';
        this.cityName = 'Seoul';
        this.getWeather(this.cityName);
    }
    AppComponent.prototype.onSelect = function (weatherdata) {
        this.selectedWeatherdata = weatherdata;
    };
    AppComponent.prototype.getWeatherFromForm = function () {
        this.getWeather(this.cityName);
    };
    AppComponent.prototype.getWeather = function (cityName) {
        var _this = this;
        var appId = '2da6c5cca312fef5fa8fdc26f5ca8180';
        var param = 'q=' + cityName + '&mode=json&units=metric&APPID=' + appId;
        var query = 'http://api.openweathermap.org/data/2.5/weather?'
            + param;
        this.http.get(query)
            .subscribe(function (data) { return _this.parseWeatherData(data); }, function (err) { return _this.logError(err.text()); }, function () { return console.log(_this.weather); });
    };
    AppComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    AppComponent.prototype.parseWeatherData = function (data) {
        this.weatherdata = JSON.parse(data.text());
        this.weatherdata.main.temp = parseInt(this.weatherdata.main.temp);
        this.weatherdata.weather[0].icon = "http://openweathermap.org/img/w/" + this.weatherdata.weather[0].icon + ".png";
        console.log(this.weatherdata);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            viewProviders: [http_1.HTTP_PROVIDERS],
            templateUrl: '/app/view.html',
            //styleUrls: [ 'stylesheets/style.css' ],
            directives: [chat_component_1.ChatComponent]
        }), 
        __metadata('design:paramtypes', [(typeof Http !== 'undefined' && Http) || Object])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map