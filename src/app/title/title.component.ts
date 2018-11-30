import { Component, OnInit } from '@angular/core';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'joker-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  title = 'ciao';
  name = 'compa';
  counter  = 0 ;
  isOff = true;
  color = 'red';
  size = '100px';

increment = () => {
  this.counter++;
  console.log(this.counter);
  this.isOff = !this.isOff;
}
greet = () => {
  return this.title + ' ' +  this.name;
}
  constructor() { }

  ngOnInit() {
    // setInterval(this.increment, 1000 );

  }


}
