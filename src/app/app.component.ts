import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hidden=false;
  log = [];
  
  
onTogle(){
  this.hidden = !this.hidden;
  this.log.push(this.log.length + 1);
}
}
