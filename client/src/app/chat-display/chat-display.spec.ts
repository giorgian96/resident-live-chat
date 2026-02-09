import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDisplay } from './chat-display';

describe('ChatDisplay', () => {
  let component: ChatDisplay;
  let fixture: ComponentFixture<ChatDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatDisplay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
