import { NgModule } from '@angular/core';
import { StoredataDirective } from './storedata/storedata';
@NgModule({
	declarations: [StoredataDirective],
	imports: [],
	exports: [StoredataDirective]
})
export class DirectivesModule {
	storagedata(post) {
		
	}
}
