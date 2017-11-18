import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortefeuilleComponent } from './portefeuille.component';

describe('PortefeuilleComponent', () => {
  let component: PortefeuilleComponent;
  let fixture: ComponentFixture<PortefeuilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortefeuilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortefeuilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
