import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatNotification } from './chat-notification';

describe('ChatNotification', () => {
  let component: ChatNotification;
  let fixture: ComponentFixture<ChatNotification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatNotification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatNotification);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
