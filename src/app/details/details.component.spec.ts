import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { ActivatedRoute} from '@angular/router';
import { DataService } from '../data.service';
import { MockDataService } from '../mock-data.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      providers: [ 
        { provide: DataService, useClass: MockDataService }, 
        { provide: ActivatedRoute, useClass: RouterTestingModule }],
      imports: [ 
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
