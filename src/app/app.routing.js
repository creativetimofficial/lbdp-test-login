"use strict";
var admin_layout_component_1 = require('./layouts/admin/admin-layout.component');
var auth_layout_component_1 = require('./layouts/auth/auth-layout.component');
exports.AppRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '',
        component: admin_layout_component_1.AdminLayoutComponent,
        children: [{
                path: 'home',
                loadChildren: './home/home.module#HomeModule'
            }]
    },
    {
        path: '',
        component: auth_layout_component_1.AuthLayoutComponent,
        children: [{
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
    }
];
//# sourceMappingURL=app.routing.js.map