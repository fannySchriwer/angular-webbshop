import { TestBed } from '@angular/core/testing';

import { MockDataService } from './mock-data.service';

describe('MockDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockDataService = TestBed.get(MockDataService);
    expect(service).toBeTruthy();
  });

  it('should add an order to the mockorder list', () => {
    const service: MockDataService = TestBed.get(MockDataService);
    expect(service.mockOrder.length).toBe(0);
    service.sendOrder(service.order);
    expect(service.mockOrder.length).toBe(1);
  });

  it('should return a list of type IProduct', () => {
    const service: MockDataService = TestBed.get(MockDataService);
    service.getData().subscribe((data) => {      
      service.mockProducts = data;
    });
    expect(service.mockProducts.length).toBe(2);

  });

  it('should send product to a list and return the list', () => {
    const service: MockDataService = TestBed.get(MockDataService);
    service.pushCartItem(1, service.product);
    let cartItems = service.getCartItems();
    expect(cartItems.length).toBeGreaterThan(0);
  });

  it('should return a product with matching id to parameter', () => {
    const service: MockDataService = TestBed.get(MockDataService);
    service.getProduct(1);
    expect(service.productToMatch.length).toBe(1);
  });



});
