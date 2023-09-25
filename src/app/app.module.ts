import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { BannerTitleComponent } from './components/banner-title/banner-title.component';
import { BannerSubtitleComponent } from './components/banner-subtitle/banner-subtitle.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { NormalCardComponent } from './components/normal-card/normal-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BannerTitleComponent,
    BannerSubtitleComponent,
    BigCardComponent,
    NormalCardComponent,
    SmallCardComponent,
    HomeComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
