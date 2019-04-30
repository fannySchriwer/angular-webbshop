import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { MockDataService } from '../../mock-data.service';
import { DataService } from '../../data.service';
import { PrintProductComponent } from './print-product/print-product.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent, PrintProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a list of type IProduct', () => {
    fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.debugElement.componentInstance;
    let myTestList = app.getData();
    expect(myTestList.length).toBeGreaterThan(0);
  });
});
