import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/home/dashboard', title: 'Dashboard', icon: 'pe-7s-graph' },

    { path: '/pages/user', title: 'User', icon:'pe-7s-plugin' },
    { path: '/pages/login', title: 'Login', icon:'pe-7s-plugin' }

]
@Component({
  selector: 'app-layout',
  templateUrl: './admin-layout.component.html'
})

export class AdminLayoutComponent implements OnInit {
    public menuItems: any[];

    constructor() {}
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
