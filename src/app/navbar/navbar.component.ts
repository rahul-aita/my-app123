import { Component } from '@angular/core';

@Component({
  selector: '.app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(){

}
sitename:string='eShopping'
ngOnInit(){
  
}
}
  //3 way selector will be used like html tag and html attribute or css class.
  //selector will be used like html tag or selector will be used like attibute like this'[app-navbar]' and used as a attribute in div tag or we can also used as a class like this '.app-navbar' and used in div as a class.
  //data binding is communication b/w component and view template.
  //one way data binding in way like event binding view to component or component to view ex:-string interpolation,property binding([property]="data"),event binding(data)="expression view to component".
  //two way data binding in this data transfrer b/w both thw place. it is combination of property binding and event binding example:-. 
  //