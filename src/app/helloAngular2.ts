import { Component, Input } from 'angular2/core';

@Component({
  selector: 'hello-angular',
  template: '<p>Hello, {{ name }}</p>'
})
export class HelloAngular2 {
    @Input() name: string = 'World';
}