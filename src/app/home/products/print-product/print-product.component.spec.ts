import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintProductComponent } from './print-product.component';
import { RouterTestingModule } from '@angular/router/testing';
import { IProduct } from 'src/app/interfaces/IProduct';
import { MockDataService } from '../../../mock-data.service';
import { Component } from '@angular/core';

describe('PrintProductComponent', () => {
  let component: PrintProductComponent;
  let fixture: ComponentFixture<PrintProductComponent>;
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PrintProductComponent,
        TestHostComponent],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;
    testHostFixture.detectChanges();

    fixture = TestBed.createComponent(PrintProductComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return one product', () => {
    expect(testHostComponent.product.id).toBe(1);
  });

  @Component({
    template: '<app-print-product input="test-data" class="product-column" *ngFor="let product of products" [product]="product"> </app-print-product>' 
  })

  class TestHostComponent {

    product: IProduct;

    constructor (private service : MockDataService ) {
      this.getProducts();
     }

    getProducts() {
      this.service.getData().subscribe((data) => {      
        this.product = data[0];
      });
  }
}

});
