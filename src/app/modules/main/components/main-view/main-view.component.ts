import { SharedService } from '@/app/services/shared.service';
import { isPlatformBrowser } from '@angular/common';
import { Component } from '@angular/core';
import { faLinkedinIn, faGithub, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent {

  public controls = [
    {
      icon: faLinkedinIn,
      name: 'linkedIn',
      link: 'https://www.linkedin.com/in/agustinibz/'
    },
    {
      icon: faGithub,
      name: 'hithub',
      link: 'https://github.com/Agustin2214'
    },
    {
      icon: faWhatsapp,
      name: 'twitter',
      link: 'https://api.whatsapp.com/send?phone=543854447988&text=Hola%20Agustin%2C%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20comunicarme%20contigo.'
    },
  ]

  constructor(private sharedService: SharedService) { }

  goTo(route: string) {
    this.sharedService.goToSection(route)
  }

}
