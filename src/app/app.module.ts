import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { TemplateSidebarComponent } from './template-sidebar/template-sidebar.component';
import { TemplateHeaderComponent } from './template-header/template-header.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateSidebarComponent,
    TemplateHeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
