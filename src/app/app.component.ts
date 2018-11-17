import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expo-app';

  items ;

  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit() {
    // firebase.initializeApp({
    //   apiKey: "XXXXXXXXXXXXXXXXXXXXXXX",
    //   authDomain: "expo-dev.firebaseapp.com"
    // });

    const result  = this.db.list('/items').snapshotChanges()
    .pipe(
      map(actions => 
        actions.map(a => ({ key: a.key, ...a.payload.val() }))
      )
    ).subscribe(items => {
      console.log('result:' + items);
      return items.map(item => item.key);
    });
  } 
}
