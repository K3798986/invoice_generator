import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderRecipientComponent } from './sender-recipient.component';

describe('SenderRecipientComponent', () => {
  let component: SenderRecipientComponent;
  let fixture: ComponentFixture<SenderRecipientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SenderRecipientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderRecipientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
