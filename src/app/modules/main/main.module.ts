import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { MainViewComponent } from './components/main-view/main-view.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecomendationsComponent } from './components/recomendations/recomendations.component';
import { TestimonyComponent } from './components/recomendations/testimony/testimony.component';
import { JobsComponent } from './components/jobs/jobs.component';

import { YouTubePlayerModule } from '@angular/youtube-player';

@NgModule({
  declarations: [
    MainComponent,
    MainViewComponent,
    AboutMeComponent,
    RecomendationsComponent,
    TestimonyComponent,
    JobsComponent,

  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    FontAwesomeModule,
    TranslateModule,
    YouTubePlayerModule
  ]
})
export class MainModule { }
