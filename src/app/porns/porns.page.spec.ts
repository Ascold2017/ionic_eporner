import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PornsPage } from './porns.page';

describe('PornsPage', () => {
  let component: PornsPage;
  let fixture: ComponentFixture<PornsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PornsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PornsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
