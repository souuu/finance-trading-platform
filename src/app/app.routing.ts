import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import {PortefeuilleComponent} from "./portefeuille/portefeuille.component";
import {CoursComponent} from "./cours/cours.component";
import {HistoriqueComponent} from "./historique/historique.component";
import {NewsComponent} from "./news/news.component";
import {StatsComponent} from "./stats/stats.component";
import {LoginComponent} from "./login/login.component";

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'user',
        component: UserComponent
    },
    {
        path: 'portefeuille',
        component: PortefeuilleComponent
    },
    {
        path: 'cours',
        component: CoursComponent
    },
    {
        path: 'historique',
        component: HistoriqueComponent
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'stats',
        component: StatsComponent
    }
];
