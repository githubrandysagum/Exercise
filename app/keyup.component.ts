import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'keyup',
    template: `
    <input #box  (keyup.enter)="onKey(box.value)" (blur)="values=box.value">
    <p>{{values}}</p>
    `

})
export class KeyUpComponent_v1 {
  values = '';

  // without strong typing
  onKey(value:string) {
    this.values += value + ' | ';
   

  }
}
