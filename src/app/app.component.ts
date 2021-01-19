import {Component, OnInit, TemplateRef} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {AngularFireAuth} from '@angular/fire/auth';
import firebase from 'firebase/app';
import {AuthProvider} from 'ngx-auth-firebaseui';
import {AngularFirestore} from '@angular/fire/firestore';
import {MatDialog} from '@angular/material/dialog';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    public selectedIndex = 0;
    public appPages = [
        {
            title: 'Admin Dashboard',
            url: '/admin',
            icon: 'key-outline'
        },
        {
            title: 'Faculty Dashboard',
            url: '/faculty',
            icon: 'person-circle-outline'
        },
        {
            title: 'Student Dashboard',
            url: '/student',
            icon: 'school-outline'
        }
    ];
    public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

    providers: AuthProvider [] = [
        AuthProvider.Google,
        AuthProvider.PhoneNumber,
    ];
    private recaptchaVerifier: firebase.auth.RecaptchaVerifier;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        public auth: AngularFireAuth,
        private dialog: MatDialog,
        private afs: AngularFirestore
    ) {
        // this.logout();
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit() {
        const path = window.location.pathname.split('folder/')[1];
        if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        }
    }

    async phoneVerification() {

    }

    async login(temp: TemplateRef<any>) {
        const loginData = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        const {displayName, email, emailVerified, uid, photoURL, phoneNumber} = loginData.user;
        const docRef = this.afs.doc(`users/${uid}`).ref;
        const docData = await docRef.get();
        if (!docData.exists) {
            // alert('Show User Registration form');
            this.dialog.open(temp, {data: {displayName, email, emailVerified, uid, photoURL, phoneNumber}});
        }
    }

    async logout() {
        await this.auth.signOut();
    }

    // tslint:disable-next-line:max-line-length
    async saveUserInfo(userRegistrationForm: NgForm, data: { displayName: string, email: string, emailVerified: boolean, uid: string, photoURL: string, phoneNumber: string }) {
        const docRef = this.afs.doc(`users/${data.uid}`).ref;
        await docRef.set({
            displayName: userRegistrationForm.value.displayName,
            email: data.email,
            emailVerified: data.emailVerified,
            phoneVerified: false,
            uid: data.uid,
            photoURL: data.photoURL,
            phoneNumber: userRegistrationForm.value.phoneNumber,
            dateOfBirth: userRegistrationForm.value.dateOfBirth,
        });
        userRegistrationForm.resetForm({});
        this.dialog.closeAll();
    }
}
