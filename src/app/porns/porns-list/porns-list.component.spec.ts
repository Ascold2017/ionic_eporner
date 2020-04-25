import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PornsListComponent } from './porns-list.component';

describe('PornsListComponent', () => {
  let component: PornsListComponent;
  let fixture: ComponentFixture<PornsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PornsListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PornsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
