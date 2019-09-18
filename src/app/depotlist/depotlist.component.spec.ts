import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepotlistComponent } from './depotlist.component';

describe('DepotlistComponent', () => {
  let component: DepotlistComponent;
  let fixture: ComponentFixture<DepotlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepotlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepotlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
