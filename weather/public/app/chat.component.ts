import {Component} from 'angular2/core';
import {Http, HTTP_PROVIDERS, BaseRequestOptions, RequestOptions} from 'angular2/http';
 
@Component({
  selector: 'chat-detail',
  inputs: ['weatherdata'],
  //viewProviders: [HTTP_PROVIDERS],
  templateUrl:'/app/chat.view.html'
})
 
export class ChatComponent{
  public weatherdata;
}