import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/domain/contacto';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contacto: Contacto = new Contacto();

  constructor(){}
  
  ngOnInit(): void {

  }

  enviar(){
    console.log(this.contacto);
    
  }
}
