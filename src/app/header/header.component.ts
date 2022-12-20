import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
slogan:string='Your one stop shop for everything'
  constructor(){

}

ngOnInit(){

}
source:string="/assets/ice-cream-1544475_960_720.webp"
getSlogan(){
  return "Your one stop shop for everything"
}
}
