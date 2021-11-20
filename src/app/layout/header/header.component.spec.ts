import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Should change buttonClosed value and add new style when button was clicked', () => {
    component.changeButtonMenu();
    expect(component.buttonClosed).toBe(true)
    const button = document.getElementById('buttonMenu')
    expect(button?.className.includes('menu-principal__btn--fechar')).toBeTruthy()

  })

});
