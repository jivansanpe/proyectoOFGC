import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAndAdminComponent } from './user-and-admin.component';

describe('UserAndAdminComponent', () => {
  let component: UserAndAdminComponent;
  let fixture: ComponentFixture<UserAndAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAndAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAndAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
