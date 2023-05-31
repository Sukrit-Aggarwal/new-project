import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-newaud',
  templateUrl: './newaud.component.html',
  styleUrls: ['./newaud.component.scss']
})



export class NewaudComponent {

  constructor(private readonly router: Router) { }

  onClick(){
    // console.log("newaud---onClick()")
    // this.router.navigate([{ outlets: { 'newaud': 'createnewaud/step1'}}])
  }

}
