import {Component, OnInit} from '@angular/core';
import {AuthProvider} from 'ngx-auth-firebaseui';
import {ActivatedRoute} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {MatDialog} from '@angular/material/dialog';
import {shareReplay, switchMap, tap} from 'rxjs/operators';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {

    userDetails$ = this.auth.user.pipe(switchMap(value => {
            return this.afs.doc(`users/${value.uid}`).valueChanges().pipe(shareReplay());
        }), shareReplay()
    );


    constructor(
        private activatedRoute: ActivatedRoute,
        public auth: AngularFireAuth,
        private afs: AngularFirestore,
        private snackBar: MatSnackBar,
    ) {
    }

    getUserDetails(uid: string) {
        return this.afs.doc(`users/${uid}`).valueChanges().pipe(tap(x => {
            debugger;
        }));
    }
}
