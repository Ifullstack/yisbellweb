import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasesAdultosComponent } from './clases-adultos.component';

describe('ClasesAdultosComponent', () => {
  let component: ClasesAdultosComponent;
  let fixture: ComponentFixture<ClasesAdultosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasesAdultosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasesAdultosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
