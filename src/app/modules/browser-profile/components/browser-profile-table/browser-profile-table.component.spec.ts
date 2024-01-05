import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserProfileTableComponent } from './browser-profile-table.component';

describe('BrowserProfileTableComponent', () => {
  let component: BrowserProfileTableComponent;
  let fixture: ComponentFixture<BrowserProfileTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserProfileTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrowserProfileTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
