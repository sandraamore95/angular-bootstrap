import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuebloComponent } from './pueblo.component';

describe('PuebloComponent', () => {
  let component: PuebloComponent;
  let fixture: ComponentFixture<PuebloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PuebloComponent]
    });
    fixture = TestBed.createComponent(PuebloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
