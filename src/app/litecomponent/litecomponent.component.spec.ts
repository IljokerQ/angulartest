import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitecomponentComponent } from './litecomponent.component';

describe('LitecomponentComponent', () => {
  let component: LitecomponentComponent;
  let fixture: ComponentFixture<LitecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
