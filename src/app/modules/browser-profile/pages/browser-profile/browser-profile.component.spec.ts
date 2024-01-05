import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserProfileComponent } from './browser-profile.component';

describe('BrowserProfileComponent', () => {
  let component: BrowserProfileComponent;
  let fixture: ComponentFixture<BrowserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
