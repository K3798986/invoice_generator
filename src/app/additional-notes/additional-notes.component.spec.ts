import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalNotesComponent } from './additional-notes.component';

describe('AdditionalNotesComponent', () => {
  let component: AdditionalNotesComponent;
  let fixture: ComponentFixture<AdditionalNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalNotesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
