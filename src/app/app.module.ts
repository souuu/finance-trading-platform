import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { NguiMapModule} from '@ngui/map';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { UserComponent }   from './user/user.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { IconsComponent }   from './icons/icons.component';
import { MapsComponent }   from './maps/maps.component';
import { NotificationsComponent }   from './notifications/notifications.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';
import { PortefeuilleComponent } from './portefeuille/portefeuille.component';
import { CoursComponent } from './cours/cours.component';
import { HistoriqueComponent } from './historique/historique.component';
import { NewsComponent } from './news/news.component';
import { StatsComponent } from './stats/stats.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoreModule} from "./core/core.module";
import {OrderModalComponent} from "./order-modal/order-modal.component";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {OrdersComponent} from "./orders/orders.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    PortefeuilleComponent,
    CoursComponent,
    OrdersComponent,
    HistoriqueComponent,
    NewsComponent,
    StatsComponent,
      OrderModalComponent,
      LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyBr-tgUtpm8cyjYVQDrjs8YpZH7zBNWPuY'}),
      BrowserModule,
      FormsModule,
      HttpModule,
      NgbModule.forRoot(),
      CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
