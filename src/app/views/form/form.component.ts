import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/models/countryModel';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  

  constructor() { }
 
  countries:Countries[]=[
    {name:'Egypt'},
    {name:'United States'},
    {name:'England'},
    {name:'France'},
    {name:'Poland'},
    {name:'Gerany'},
    {name:'Brazil'}
  ]
  onSubmit(contactForm:any){
    console.log(contactForm)
  }

  ngOnInit(): void {
  }

}
