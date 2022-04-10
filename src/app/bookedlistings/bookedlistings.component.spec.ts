import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedlistingsComponent } from './bookedlistings.component';

describe('BookedlistingsComponent', () => {
  let component: BookedlistingsComponent;
  let fixture: ComponentFixture<BookedlistingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookedlistingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookedlistingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
