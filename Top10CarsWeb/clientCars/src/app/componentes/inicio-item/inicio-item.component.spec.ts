import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioItemComponent } from './inicio-item.component';

describe('InicioItemComponent', () => {
  let component: InicioItemComponent;
  let fixture: ComponentFixture<InicioItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
