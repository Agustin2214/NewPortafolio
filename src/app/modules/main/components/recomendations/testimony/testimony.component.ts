import { Testimony } from '@/types/general.types';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.scss']
})
export class TestimonyComponent  {

  @Input() public testimony: Testimony = {

    description: '',
    idTestimony: 0,
    
  };
  @Input() public checked: boolean = false;

  constructor() { }

}
