import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesKidsComponent } from './clases-kids.component';

describe('ClasesKidsComponent', () => {
  let component: ClasesKidsComponent;
  let fixture: ComponentFixture<ClasesKidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasesKidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasesKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
