import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationLabelComponent } from './qualification-label.component';

describe('QualificationLabelComponent', () => {
  let component: QualificationLabelComponent;
  let fixture: ComponentFixture<QualificationLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualificationLabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QualificationLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
