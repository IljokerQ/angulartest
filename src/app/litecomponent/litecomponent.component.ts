import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'joker-litecomponent',
  templateUrl: './litecomponent.component.html',
  styleUrls: ['./litecomponent.component.scss']
})
export class LitecomponentComponent implements OnInit {

isLike = false;
bgColor = 'red';
changeColor = () => {
 this.isLike = !this.isLike;
console.log(this.isLike);
if ( this.isLike === true) {
this.bgColor = 'blue';

} else {
  this.bgColor = 'red';

}
console.log( this.isLike, this.bgColor);
}

  constructor() { }

  ngOnInit() {
  }

}
