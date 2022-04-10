import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingslistComponent } from './listingslist.component';

describe('ListingslistComponent', () => {
  let component: ListingslistComponent;
  let fixture: ComponentFixture<ListingslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListingslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
