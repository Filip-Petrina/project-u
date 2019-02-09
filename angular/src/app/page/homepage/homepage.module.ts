import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomepageRoutingModule } from '@homepage/homepage-routing.module';
import { HomepageComponent } from '@homepage/homepage.component';


@NgModule({
  imports: [
	CommonModule,
	HomepageRoutingModule,
  ],
  declarations: [HomepageComponent]
})
export class HomepageModule { }
