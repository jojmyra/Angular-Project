import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material';
import { TemplateSidebarComponent } from './template-sidebar/template-sidebar.component';
import { TemplateHeaderComponent } from './template-header/template-header.component';
import { TemplateFooterComponent } from './template-footer/template-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateSidebarComponent,
    TemplateHeaderComponent,
    TemplateFooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'sb',
        component: TemplateSidebarComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
