import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjschildComponent } from './ajschild.component';

describe('AjschildComponent', () => {
  let component: AjschildComponent;
  let fixture: ComponentFixture<AjschildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjschildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
