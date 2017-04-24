"use strict";
//
// import { NotFoundComponent } from './not-found/not-found.component';
// import { ErrorComponent } from './error/error.component';
// import { ForgotComponent } from './forgot/forgot.component';
// import { LockscreenComponent } from './lockscreen/lockscreen.component';
// import { SigninComponent } from './signin/signin.component';
var user_component_1 = require('./userpage/user.component');
exports.PagesRoutes = [
    {
        path: '',
        children: [{
                path: 'user',
                component: user_component_1.UserComponent
            }]
    }
];
//# sourceMappingURL=pages.routing.js.map