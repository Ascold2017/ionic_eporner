import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PornsPageRoutingModule } from './porns-routing.module';

import { PornsPage } from './porns.page';
import { SearchFormComponent } from './search-form/search-form.component';
import { PornsListComponent } from './porns-list/porns-list.component';
import { PornsListItemComponent } from './porns-list-item/porns-list-item.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PornsPageRoutingModule
  ],
  declarations: [PornsPage, SearchFormComponent, PornsListComponent, PornsListItemComponent]
})
export class PornsPageModule {}
