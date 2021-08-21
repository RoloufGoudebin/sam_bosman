import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { VideoComponent } from './video/video.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ContactComponent } from './contact/contact.component';
import { ProComponent } from './pro/pro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BioComponent,
    VideoComponent,
    GalleryComponent,
    AgendaComponent,
    ContactComponent,
    ProComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
