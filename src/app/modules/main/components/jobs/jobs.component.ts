import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  private path = '../../../../../assets/jobs'
  public faAngleRight = faAngleRight
  public jobs: any;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.jobs = [
      {
        image: `${this.path}/vuelos-sabre.png`,
        title: 'DAIANA',
        description: 'JOBS.TRABAJO4.DESCRIPCION',
        video: 'https://www.youtube.com/watch?v=S4q2FSLmNVY',
        videoId: 'S4q2FSLmNVY',
        skills: ['Python-Flask','Node-Express','NextJs','Supabase','Langchain','OpenAI','Postgres','Redux','TypeScript','Tailwind CSS'],
      },
      {
        image: `${this.path}/mochileros.jpg`,
        title: 'VINOTECA',
        description: 'JOBS.TRABAJO2.DESCRIPCION',
        video: 'https://www.youtube.com/watch?v=fJ7YDtWja_w',
        videoId: 'fJ7YDtWja_w',
        skills: ['JavaScript', 'React-Redux', 'MongoDB', 'Node js', 'Express', 'Git', 'Integracion API mercado pago', 'Html/Css','MaterialUI'],
      },
      {
        image: `${this.path}/vuelos-sabre.png`,
        title: 'BLOCKFLIX',
        description: 'JOBS.TRABAJO3.DESCRIPCION',
        video: 'https://www.youtube.com/watch?v=ollRQM_qdTc',
        videoId: 'ollRQM_qdTc',
        skills: ['JavaScript', 'React',  'Git', 'Html/Css','Redux','Api TMBD'],
      },
      {
        image: `${this.path}/vuelos-sabre.png`,
        title: 'PORTAFOLIO',
        description: 'JOBS.TRABAJO6.DESCRIPCION',
        video: 'https://www.youtube.com/watch?v=jsmGR3AbxCc',
        videoId: 'jsmGR3AbxCc',
        skills: ['JavaScript', 'React', 'Git', 'Html/Css','bootstrap'],
      },
    ]
  }
}
