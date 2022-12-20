import { Component, Input, Output } from "@angular/core";

@Component({
selector:'app-container',
templateUrl:'./container.component.html',
styleUrls:['./container.component.css']
})


export class ContainerComponent{
   dataParent:any="rahul"
   @Input() name:any;
}