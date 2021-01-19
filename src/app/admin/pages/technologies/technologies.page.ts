import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {MatDialog} from '@angular/material/dialog';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {AlertController, NavController} from '@ionic/angular';

@Component({
    selector: 'app-technologies',
    templateUrl: './technologies.page.html',
    styleUrls: ['./technologies.page.scss'],
})
export class TechnologiesPage implements OnInit {
    private itemsCollection: AngularFirestoreCollection<any>;
    items: Observable<any[]>;

    constructor(
        public auth: AngularFireAuth,
        private dialog: MatDialog,
        private navCtrl: NavController,
        public alertController: AlertController,
        private afs: AngularFirestore
    ) {
        this.itemsCollection = afs.collection<any>('technologies', ref => {
            return ref.where('deleted', '==', false);
        });
        this.items = this.itemsCollection.valueChanges();
    }

    ngOnInit() {
    }


    async saveTechnology(addTechnologyForm: NgForm) {
        const docRef = this.itemsCollection.ref.doc();
        const id = docRef.id;
        const name = addTechnologyForm.value.name;
        const deleted = false;
        try {
            await docRef.set({
                name,
                id,
                deleted,
            });
            this.dialog.closeAll();
        } catch (e) {
        }
    }

    async updateTechnology(editTechnologyForm: NgForm, data: any) {
        const docRef = this.itemsCollection.doc(data.id).ref;
        const name = editTechnologyForm.value.name;
        try {
            await docRef.update({name});
            this.dialog.closeAll();
        } catch (e) {
        }
    }

    async deleteTechnology(data: any) {
        const alert = await this.alertController.create({
            header: 'Delete Confirm!',
            message: 'Are you sure! Do you want to delete technology',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary'
                }, {
                    text: 'Okay',
                    handler: async () => {
                        const docRef = this.itemsCollection.doc(data.id).ref;
                        try {
                            await docRef.update({deleted: true});
                            this.dialog.closeAll();
                        } catch (e) {
                        }
                    }
                }
            ]
        });
        await alert.present();
    }

    async openItem(pageLink: string, technologyId: string) {
        await this.navCtrl.navigateForward(['admin', pageLink, technologyId], {animated: true});
    }
}
