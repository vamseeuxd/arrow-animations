import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-topics',
    templateUrl: './topics.page.html',
    styleUrls: ['./topics.page.scss'],
})
export class TopicsPage implements OnInit {
    technology: string;
    technologyDetails$: Observable<any>;
    private itemsCollection: AngularFirestoreCollection<any>;
    items: Observable<any[]>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private afs: AngularFirestore
    ) {
        this.itemsCollection = afs.collection<any>('technologies', ref => {
            return ref.where('deleted', '==', false);
        });
        this.items = this.itemsCollection.valueChanges();
    }

    ngOnInit() {
        this.technology = this.activatedRoute.snapshot.paramMap.get('technologyId');
        this.technologyDetails$ = this.itemsCollection.doc(this.technology).valueChanges();
    }

}
