import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-newaud',
  templateUrl: './newaud.component.html',
  styleUrls: ['./newaud.component.scss']
})



export class NewaudComponent {

  showStep1: boolean = false;

  constructor(private readonly router: Router, private route: ActivatedRoute) { }

  onClick() {
    console.log("newaud---onClick()");
    this.showStep1 = true;
    this.router.navigate([{ outlets: { newaud: ['createnewaud', 'step1'] } }]);
  }

}
