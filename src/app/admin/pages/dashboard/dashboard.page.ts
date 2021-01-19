import {Component, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

    constructor(
        private navCtrl: NavController,
    ) {
    }

    ngOnInit() {
    }

    async openItem(pageLink: string) {
        await this.navCtrl.navigateForward(['admin', pageLink], {animated: true});
    }

}
