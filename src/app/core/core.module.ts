import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TreeViewComponent } from './components/menu/tree-view.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

import { RoutePartsService } from './services/route-parts.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    TreeViewComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    TreeViewComponent
  ],
  providers: [
    RoutePartsService
  ]
})
export class CoreModule { }
