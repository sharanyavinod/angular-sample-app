import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { SpaAngularEditableComponentsModule } from '@adobe/aem-angular-editable-components';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TextComponent } from './text/text.component';
import {
  AEMResponsiveGridComponent } from '@adobe/aem-angular-editable-components';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpaAngularEditableComponentsModule
  ],
  providers: [{ 
    provide: APP_BASE_HREF, 
    useFactory:()=>{
      return window.location.host.indexOf("localhost:4502") < 0 ? '/' : '/';
    }  
  }],
  bootstrap: [AppComponent],
  entryComponents: [TextComponent, AEMResponsiveGridComponent],
})
export class AppModule { }
