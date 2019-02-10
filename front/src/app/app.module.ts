import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DefaultHeadersInterceptor } from './interceptor/default-headers.interceptor';

import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';

/* Router */
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

/* Services */
import { ExpressService } from '@service/express/express.service';

const INTERCEPTORS = [
	{ provide: HTTP_INTERCEPTORS, useClass: DefaultHeadersInterceptor, multi: true },
]

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    NgbModule,
    ComponentModule,
  ],
  providers: [
    ExpressService,
    INTERCEPTORS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
