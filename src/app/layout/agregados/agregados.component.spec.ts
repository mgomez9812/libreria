import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregadosComponent } from './agregados.component';

describe('AgregadosComponent', () => {
  let component: AgregadosComponent;
  let fixture: ComponentFixture<AgregadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
