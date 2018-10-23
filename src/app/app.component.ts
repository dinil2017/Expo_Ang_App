import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expo-app';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCh-_QHgsd_hwY3Izal4WhxzsJFDaEIc4Q",
      authDomain: "expo-dev.firebaseapp.com"
    });
  }

}
