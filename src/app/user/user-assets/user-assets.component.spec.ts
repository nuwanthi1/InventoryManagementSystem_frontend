import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssetsComponent } from './user-assets.component';

describe('UserAssetsComponent', () => {
  let component: UserAssetsComponent;
  let fixture: ComponentFixture<UserAssetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserAssetsComponent]
    });
    fixture = TestBed.createComponent(UserAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
