import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';
import {WeatherData} from './weatherdata';
import {ChatComponent} from './chat.component';
 
@Component({
  selector: 'my-app',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl:'/app/view.html',
  //styleUrls: [ 'stylesheets/style.css' ],
  directives: [ChatComponent]
})
 
export class AppComponent {
  public title = 'S2 Weather';
  public weatherdata;
  public selectedWeatherdata;
  public cityName;
  constructor(public http: Http) {
    this.cityName = 'Seoul';
    this.getWeather(this.cityName);
  }

  onSelect(weatherdata) { 
    this.selectedWeatherdata = weatherdata;
  }

  getWeatherFromForm() {
    this.getWeather(this.cityName);
  }

  getWeather(cityName) {
    var appId = '2da6c5cca312fef5fa8fdc26f5ca8180';
    var param = 'q=' + cityName + '&mode=json&units=metric&APPID=' + appId;
    var query = 'http://api.openweathermap.org/data/2.5/weather?' 
                + param;
    this.http.get(query)
      .subscribe(
        data => this.parseWeatherData(data),
        err => this.logError(err.text()),
        () => console.log(this.weather)
      );
  }

  logError(err) {
    console.error('There was an error: ' + err);
  }

  parseWeatherData(data) {
    this.weatherdata = JSON.parse(data.text());
    this.weatherdata.main.temp = parseInt(this.weatherdata.main.temp);
    this.weatherdata.weather[0].icon = "http://openweathermap.org/img/w/" + this.weatherdata.weather[0].icon + ".png";
    console.log(this.weatherdata);
  }
}