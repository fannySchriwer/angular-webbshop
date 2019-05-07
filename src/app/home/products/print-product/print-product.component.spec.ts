import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintProductComponent } from './print-product.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PrintProductComponent', () => {
  let component: PrintProductComponent;
  let fixture: ComponentFixture<PrintProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        PrintProductComponent],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
