import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AlertsModule } from 'angular-alert-module';
import { MaterialModule } from './material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from './auth.service';


import { TemplateSidebarComponent } from './template-sidebar/template-sidebar.component';
import { TemplateHeaderComponent } from './template-header/template-header.component';
import { TemplateFooterComponent } from './template-footer/template-footer.component';
import { TemplateHeaderCenterComponent } from './template-header-center/template-header-center.component';
import { TemplateHeaderBottomComponent } from './template-header-bottom/template-header-bottom.component';
import { ItemComponent } from './item/item.component';
import { TemplateLoginComponent } from './template-login/template-login.component';
import { TemplateRegisterComponent } from './template-register/template-register.component';
import { TemplateConditionalComponent } from './template-conditional/template-conditional.component';
import { TemplateContactComponent } from './template-contact/template-contact.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { HomeComponent } from './home/home.component';
import { HomeNoSidebarComponent } from './home-no-sidebar/home-no-sidebar.component';
import { TemplateBacktotopComponent } from './template-backtotop/template-backtotop.component';
import { TemplateAgreementComponent } from './template-agreement/template-agreement.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent,
    TemplateSidebarComponent,
    TemplateHeaderComponent,
    TemplateFooterComponent,
    TemplateHeaderCenterComponent,
    TemplateHeaderBottomComponent,
    ItemComponent,
    TemplateLoginComponent,
    TemplateRegisterComponent,
    TemplateConditionalComponent,
    TemplateContactComponent,
    ItemDetailComponent,
    HomeComponent,
    HomeNoSidebarComponent,
    TemplateBacktotopComponent,
    TemplateAgreementComponent,
    AdminComponent,
    AdminDashboardComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgbModule,
    AlertsModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: HomeNoSidebarComponent
      },
      {
        path: 'condition',
        component: TemplateConditionalComponent
      },
      {
        path: 'agreement',
        component: TemplateAgreementComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      }
    ]),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
