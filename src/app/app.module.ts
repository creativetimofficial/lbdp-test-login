import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule
    ],
    declarations: [ AppComponent, AdminLayoutComponent, AuthLayoutComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
