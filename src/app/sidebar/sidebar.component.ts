import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'portefeuille', title: 'Portefeuille',  icon:'ti-wallet', class: '' },
    { path: 'cours', title: 'Cours',  icon:'ti-exchange-vertical', class: '' },
    { path: 'historique', title: 'Historique',  icon:'ti-view-list-alt', class: '' },
    { path: 'stats', title: 'Statistiques',  icon:'ti-panel', class: '' },
    { path: 'news', title: 'Actualités',  icon:'ti-stats-up', class: '' },
    { path: 'user', title: 'Moncompte',  icon:'ti-user', class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    constructor(private router:Router) {}
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }
    logout() {
        localStorage.setItem('logged-in', "false");
        this.router.navigate(["dashboard"]);
    }

}
