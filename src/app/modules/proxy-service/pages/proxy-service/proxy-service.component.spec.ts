import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxyServiceComponent } from './proxy-service.component';

describe('ProxyServiceComponent', () => {
  let component: ProxyServiceComponent;
  let fixture: ComponentFixture<ProxyServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProxyServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProxyServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
