### LBDP-TEST-TWO-LAYOUTS

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.2.

The file structure of our project is:

```
lbdp-test-two-layouts
├── README.md
├── e2e
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.js
│   │   ├── app.component.js.map
│   │   ├── app.component.ts
│   │   ├── app.module.js
│   │   ├── app.module.js.map
│   │   ├── app.module.ts
│   │   ├── app.routing.js
│   │   ├── app.routing.js.map
│   │   ├── app.routing.ts
│   │   ├── components
│   │   │   ├── buttons
│   │   │   │   ├── buttons.component.html
│   │   │   │   └── buttons.component.ts
│   │   │   ├── components.module.ts
│   │   │   └── components.routing.ts
│   │   ├── home
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.ts
│   │   │   │   ├── home.component.js
│   │   │   │   └── home.component.js.map
│   │   │   ├── home.module.js
│   │   │   ├── home.module.js.map
│   │   │   ├── home.module.ts
│   │   │   ├── home.routing.js
│   │   │   ├── home.routing.js.map
│   │   │   └── home.routing.ts
│   │   ├── layouts
│   │   │   ├── admin
│   │   │   │   ├── admin-layout.component.html
│   │   │   │   ├── admin-layout.component.js
│   │   │   │   ├── admin-layout.component.js.map
│   │   │   │   └── admin-layout.component.ts
│   │   │   └── auth
│   │   │       ├── auth-layout.component.html
│   │   │       ├── auth-layout.component.js
│   │   │       ├── auth-layout.component.js.map
│   │   │       └── auth-layout.component.ts
│   │   ├── main.js
│   │   ├── main.js.map
│   │   ├── main.ts
│   │   └── pages
│   │       ├── login
│   │       │   ├── login.component.html
│   │       │   └── login.component.ts
│   │       ├── pages.module.js
│   │       ├── pages.module.js.map
│   │       ├── pages.module.ts
│   │       ├── pages.routing.js
│   │       ├── pages.routing.js.map
│   │       ├── pages.routing.ts
│   │       └── userpage
│   │           ├── user.component.html
│   │           ├── user.component.js
│   │           ├── user.component.js.map
│   │           └── user.component.ts
│   ├── assets
│   │   ├── css
│   │   │   ├── bootstrap.min.css
│   │   │   ├── demo.css
│   │   │   ├── light-bootstrap-dashboard.css
│   │   │   ├── light-bootstrap-dashboard.css.map
│   │   │   └── pe-icon-7-stroke.css
│   │   ├── fonts
│   │   ├── img
│   │   ├── js
│   │   │   ├── core
│   │   │   ├── dashboard.js
│   │   │   ├── demo.js
│   │   │   ├── init
│   │   │   ├── light-bootstrap-dashboard.js
│   │   │   └── plugins
│   │   └── sass
│   │       ├── lbd
│   │       └── light-bootstrap-dashboard.scss
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
└── tslint.json

```

In `src` folder we have `index.html` which contains the following lines of code:
```
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>LbdProCliTestLayouts</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <!-- Bootstrap core CSS     -->
  <link href="./assets/css/bootstrap.min.css" rel="stylesheet" />

  <!--  Light Bootstrap Dashboard core CSS    -->
  <link href="./assets/css/light-bootstrap-dashboard.css" rel="stylesheet"/>

  <!--  CSS for Demo Purpose, don't include it in your project     -->
  <link href="./assets/css/demo.css" rel="stylesheet" />

  <!--     Fonts and icons     -->
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet">
  <link href='https://fonts.googleapis.com/css?family=Roboto:400,700,300' rel='stylesheet' type='text/css'>
  <link href="../assets/css/pe-icon-7-stroke.css" rel="stylesheet" />

</head>
<body class="perfect-scrollbar-off">
  <my-app>Loading...</my-app>
</body>
</html>

```
We don't need to include scripts in our index because we'll include them in `.angular-cli.json`.

In `src` we have the `app` folder which contains `main.ts`, `app.module.ts`, `app.components.ts`, `app.component.html` and `app.routing.ts`.

In addition to the initial project we have `app.routing.ts` which contains the following:
```
import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    },{
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      }
  ]
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }]
    }
];

```

Only in `app.component.html` and `app.module.ts` we have changes in addition to the original project.

app.component.html:
```
<router-outlet></router-outlet>
```

app.module.ts:
```
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

```


`app.module.ts` contains two layouts,  AdminLayoutComponent and AuthLayoutComponent. The first one is for Admin Page and the last one for Authentication.



To use Chartist you have to call it as follows: `import * as Chartist from 'chartist';
`

If you want to see some examples of how Chartist is used, look in: `src/app/home/dashboard/dashboard.component.ts`.
