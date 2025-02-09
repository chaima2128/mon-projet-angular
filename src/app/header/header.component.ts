import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  link1:string='Home';
  link2: string="Residences";
  url:string="https://esprit.tn/";
  linkColor: string=" ";
  clickMe(){
    alert("vous avez cliqué")
  }
  changeColor(){
    this.linkColor=this.linkColor;
  }

}
