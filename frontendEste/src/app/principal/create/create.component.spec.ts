import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateComponent ],
      imports: [IonicModule.forRoot(), ReactiveFormsModule, HttpClientTestingModule],
      providers: [HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  xit('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate nombre field', () => {
    let nickname = component.form.controls['nombre'];
    
    nickname.setValue('');
    expect(nickname.valid).toBeFalsy();
    
    nickname.setValue('validnickname');
    expect(nickname.valid).toBeTruthy();
  
    nickname.setValue('valid nickname');
    expect(nickname.valid).toBeTruthy();
  });
});
