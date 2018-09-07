import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesJoveComponent } from './clases-jove.component';

describe('ClasesJoveComponent', () => {
  let component: ClasesJoveComponent;
  let fixture: ComponentFixture<ClasesJoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasesJoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasesJoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
