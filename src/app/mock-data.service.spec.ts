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
    let myTestList = service.getData();
    expect(myTestList.length).toBeGreaterThan(0);
  });

});
