import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule } from '@angular/forms';
import { AssetCardComponent } from './asset-card/asset-card.component';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    PaginationComponent,
    AssetCardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],

  exports: [
    NavBarComponent,
    FooterComponent,
    PaginationComponent,
    AssetCardComponent,
    RouterModule,
  
  ]
})

export class SharedModule { }
