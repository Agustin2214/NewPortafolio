import { SharedService } from '@/app/services/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  public technicalSkills = ['TypeScript', 'JavaScript', 'NestJS','React-Redux',
   'Docker', 'Git', 'Node js', 'Express', 'Azure', 'Mongo db', 'Linux Shell', 'PostgreSQL', 'Html/css', 'MySql','Kubernetes','Jenkis']

  constructor(private sharedService: SharedService) { }

  goTo(route: string) {
    this.sharedService.goToSection(route)
  }
}
