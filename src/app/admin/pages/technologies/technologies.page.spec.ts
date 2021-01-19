import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TechnologiesPage } from './technologies.page';

describe('TechnologiesPage', () => {
  let component: TechnologiesPage;
  let fixture: ComponentFixture<TechnologiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologiesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
