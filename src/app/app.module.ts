import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
// import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { FormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

// import { DashboardModule } from './dashboard/dashboard.module';
// import { SidebarModule } from './sidebar/sidebar.module';
// import { FooterModule } from './shared/footer/footer.module';
// import { NavbarModule} from './shared/navbar/navbar.module';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
// import { SharedModule } from './shared/shared.module';

// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
    imports:      [
        BrowserModule,
        // ChartistModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule
    ],
    declarations: [ AppComponent, AdminLayoutComponent, AuthLayoutComponent ],
    // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
