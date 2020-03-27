import { JsonTestService } from './json-test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngx-user-demo';

  constructor(private jsonTestService: JsonTestService){}
  
  ngOnInit() {
  this.jsonTestService.get(1)
  .subscribe(
    (get) => {
      console.log('get', get);
    }
  );
  }
}
