import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardataComponent } from './cardata.component';

describe('CardataComponent', () => {
  let component: CardataComponent;
  let fixture: ComponentFixture<CardataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
