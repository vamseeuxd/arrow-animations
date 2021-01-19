import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BatchesPage } from './batches.page';

describe('BatchesPage', () => {
  let component: BatchesPage;
  let fixture: ComponentFixture<BatchesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BatchesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
