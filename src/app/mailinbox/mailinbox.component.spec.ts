import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailinboxComponent } from './mailinbox.component';

describe('MailinboxComponent', () => {
  let component: MailinboxComponent;
  let fixture: ComponentFixture<MailinboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailinboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailinboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
