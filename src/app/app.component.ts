import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '101197834_comp3133_assig2_updated';

  constructor(private router: Router) { }

  isNavigated() {
    const url = this.router.url
    if(url == "/admin"){
      return false
    }
    if(url == "/customer"){
      return false
    }
    if(url == "/admin/create-a-listing"){
      return false
    }
    return true
  }

  isLoggedIn(){
    const url = this.router.url
    if(url == "/admin"){
      return true
    }
    if(url == "/customer"){
      return true
    }
    if(url == "/admin/create-a-listing"){
      return true
    }
    return false
  }
}
