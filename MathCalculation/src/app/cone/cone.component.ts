import { Component } from "@angular/core";

@Component({
    selector:"Cone-Area",
    templateUrl:"./cone.component.html"
})
export class ConeComponent{
    radius:number;
    length:number;
    area: number;
    constructor(){
        this.radius = 0;
        this.length = 0;
        this.area = 3.14*this.radius*this.length
    }
    onCalculateArea(){
        this.area = 3.14*this.radius*this.length   
    }
}