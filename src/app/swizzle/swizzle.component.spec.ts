import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwizzleComponent } from './swizzle.component';

describe('SwizzleComponent', () => {
  let component: SwizzleComponent;
  let fixture: ComponentFixture<SwizzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwizzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwizzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
