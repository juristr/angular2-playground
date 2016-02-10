import {bootstrap} from 'angular2/platform/browser';
import { Component, enableProdMode } from 'angular2/core';

import { HelloAngular2 } from './helloAngular2';

// if in prod, enable production mode
// enableProdMode();

@Component({
    selector: 'app',
    directives: [HelloAngular2],
    template: `
        <hello-angular name="Juri"></hello-angular>
    `
})
class App {}

bootstrap(App, [])
    .catch(err => console.error(err));