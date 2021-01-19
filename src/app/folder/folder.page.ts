import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AuthProvider} from 'ngx-auth-firebaseui';

@Component({
    selector: 'app-folder',
    templateUrl: './folder.page.html',
    styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
    public folder: string;
    providers: AuthProvider [] = [
        AuthProvider.EmailAndPassword,
        AuthProvider.Google,
        AuthProvider.PhoneNumber,
    ];

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    }

    printUser(event) {
        console.log(event);
    }

    printError(event) {
        console.error(event);
    }

}
