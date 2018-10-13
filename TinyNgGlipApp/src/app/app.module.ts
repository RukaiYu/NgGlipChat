import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WechatLayoutComponent } from './components/layout/wechatLayout/wechat.layout.component';


@NgModule({
  declarations: [
    AppComponent,
    WechatLayoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
