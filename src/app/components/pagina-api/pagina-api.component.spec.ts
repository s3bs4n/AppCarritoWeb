import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaApiComponent } from './pagina-api.component';

describe('PaginaApiComponent', () => {
  let component: PaginaApiComponent;
  let fixture: ComponentFixture<PaginaApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaApiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
