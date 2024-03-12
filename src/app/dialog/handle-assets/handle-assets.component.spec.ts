import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleAssetsComponent } from './handle-assets.component';

describe('HandleAssetsComponent', () => {
  let component: HandleAssetsComponent;
  let fixture: ComponentFixture<HandleAssetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HandleAssetsComponent]
    });
    fixture = TestBed.createComponent(HandleAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
