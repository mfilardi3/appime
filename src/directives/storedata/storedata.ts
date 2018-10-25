import { Directive } from '@angular/core';

/**
 * Generated class for the StoredataDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[storedata]' // Attribute selector
})
export class StoredataDirective {

  constructor() {
    console.log('Hello StoredataDirective Directive');
  }

}
