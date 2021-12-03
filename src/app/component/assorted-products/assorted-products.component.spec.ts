import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssortedProductsComponent } from './assorted-products.component';

describe('AssortedProductsComponent', () => {
  let component: AssortedProductsComponent;
  let fixture: ComponentFixture<AssortedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssortedProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssortedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
