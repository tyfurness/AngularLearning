import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  userPopulated = false;

  onResetUsername(){
    this.userName = '';
    this.userPopulated = false;
  }
}
