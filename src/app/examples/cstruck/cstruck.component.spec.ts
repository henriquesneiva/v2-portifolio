import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CstruckComponent } from './cstruck.component';

describe('CstruckComponent', () => {
  let component: CstruckComponent;
  let fixture: ComponentFixture<CstruckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CstruckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CstruckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
