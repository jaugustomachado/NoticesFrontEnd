import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePartiallyComponent } from './update-partially.component';

describe('UpdatePartiallyComponent', () => {
  let component: UpdatePartiallyComponent;
  let fixture: ComponentFixture<UpdatePartiallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePartiallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePartiallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
