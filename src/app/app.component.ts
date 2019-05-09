import { Component, Input } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webbshop';

  constructor(private service: DataService) {}

  currentCartCounter: number;
  
  ngOnInit() {
    this.currentCartCounter = this.service.updateCartCount();
  }

}
