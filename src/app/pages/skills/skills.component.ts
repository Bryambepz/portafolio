import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  java: number = 80;
  python: number = 75;
  c_mas: number = 50;
  js: number = 40;
  ts: number = 70;
  html: number = 70;
  css: number = 60;
  angular: number = 75;
  Flask: number = 70;
  django: number = 40;
  postgres: number = 70;
  mysql: number = 70;
  oracle: number = 40;

  //skills
  liderazgo: number = 60;
  resolucion: number = 80;
  trabajo: number = 90;
  programacion: number = 90;
  adaptabilidad: number = 70;
  creatividad: number = 60;
  comunicativo: number = 75;

  activeIndex: number | undefined;
}
