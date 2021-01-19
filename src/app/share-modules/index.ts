import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material/material.module';
import {BootstrapModule} from './bootstrap/bootstrap.module';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {AngularFireModule} from '@angular/fire';
import {FormsModule} from '@angular/forms';
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';

const firebaseConfig = {
    apiKey: 'AIzaSyDwl5J6nVd1vMEeA5twlUXI3eRUYgajzGM',
    authDomain: 'arrow-erp.firebaseapp.com',
    databaseURL: 'https://arrow-erp.firebaseio.com',
    projectId: 'arrow-erp',
    storageBucket: 'arrow-erp.appspot.com',
    messagingSenderId: '294771130503',
    appId: '1:294771130503:web:cca09ce66a7faf7b2af822'
};

const fireAuthConfig = {
    enableFirestoreSync: true, // enable/disable autosync users with firestore
    toastMessageOnAuthSuccess: false, // whether to open/show a snackbar message on auth success - default : true
    toastMessageOnAuthError: false, // whether to open/show a snackbar message on auth error - default : true
    authGuardFallbackURL: '/loggedout', // url for unauthenticated users - to use in combination with canActivate feature on a route
    authGuardLoggedInURL: '/loggedin', // url for authenticated users - to use in combination with canActivate feature on a route
    passwordMaxLength: 60, // `min/max` input parameters in components should be within this range.
    passwordMinLength: 8, // Password length min/max in forms independently of each componenet min/max.
    // Same as password but for the name
    nameMaxLength: 50,
    nameMinLength: 2,
    // If set, sign-in/up form is not available until email has been verified.
    // Plus protected routes are still protected even though user is connected.
    guardProtectedRoutesUntilEmailIsVerified: true,
    enableEmailVerification: true, // default: true
};

const firebaseUiAuthConfig: firebaseui.auth.Config = {
    signInFlow: 'popup',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        {
            scopes: [
                'public_profile',
                'email',
                'user_likes',
                'user_friends'
            ],
            customParameters: {
                auth_type: 'reauthenticate'
            },
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
        },
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        {
            requireDisplayName: false,
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
        },
        firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    tosUrl: '<your-tos-link>',
    privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialModule,
        BootstrapModule,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig),
        NgxAuthFirebaseUIModule.forRoot(
            firebaseConfig,
            () => 'arrow-erp',
            fireAuthConfig
        ),
        FirebaseUIModule.forRoot(firebaseUiAuthConfig)
    ], exports: [
        MaterialModule,
        FormsModule,
        NgxAuthFirebaseUIModule,
        AngularFireModule,
        FirebaseUIModule,
        BootstrapModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }
}
