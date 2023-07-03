import { Component } from '@angular/core';
import { faLinkedinIn, faGithub, faGitlab, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
  constructor(private router: Router) { }

  goTo(route: string) {
    this.router.navigate([route])
  }

}
