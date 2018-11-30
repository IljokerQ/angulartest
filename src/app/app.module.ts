import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { TitleComponent } from './title/title.component';
import { LitecomponentComponent } from './litecomponent/litecomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    TitleComponent,
    LitecomponentComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
