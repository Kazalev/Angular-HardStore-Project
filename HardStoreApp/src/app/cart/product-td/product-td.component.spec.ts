import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTDComponent } from './product-td.component';

describe('ProductTDComponent', () => {
  let component: ProductTDComponent;
  let fixture: ComponentFixture<ProductTDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
