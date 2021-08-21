import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BioComponent } from './bio/bio.component';
import { VideoComponent } from './video/video.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ContactComponent } from './contact/contact.component';
import { ProComponent } from './pro/pro.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'bio', component: BioComponent},
  { path: 'video', component: VideoComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'agenda', component: AgendaComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'pro', component: ProComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
