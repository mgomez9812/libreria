import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProventaComponent } from './proventa.component';

describe('ProventaComponent', () => {
  let component: ProventaComponent;
  let fixture: ComponentFixture<ProventaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProventaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
