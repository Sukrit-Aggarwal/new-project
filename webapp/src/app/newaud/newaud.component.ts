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
  showStep2: boolean = false;
  showStep3: boolean = false;
  showStep4: boolean = false;
  showStep5: boolean = false;

  constructor(private readonly router: Router, private route: ActivatedRoute) { }

  onClick1() {
    console.log("newaud---onClick1()");
    this.showStep2 = false;
    this.showStep3 = false;
    this.showStep4 = false;
    this.showStep1 = true;
    this.router.navigate([{ outlets: { newaud: ['createnewaud', 'step1'] } }]);
  }
  onClick2() {
    console.log("newaud---onClick2()");
    this.showStep1 = false;
    this.showStep3 = false;
    this.showStep4 = false;
    this.showStep2 = true;
    this.router.navigate([{ outlets: { newaud: ['createnewaud', 'step2'] } }]);
  }
  onClick3() {
    console.log("newaud---onClick3()");
    this.showStep1 = false;
    this.showStep2 = false;
    this.showStep4 = false;
    this.showStep3 = true;
    this.router.navigate([{ outlets: { newaud: ['createnewaud', 'step3'] } }]);
  }
  onClick4() {
    console.log("newaud---onClick4()");
    this.showStep1 = false;
    this.showStep2 = false;
    this.showStep3 = false;
    this.showStep4 = true;
    this.router.navigate([{ outlets: { newaud: ['createnewaud', 'step4'] } }]);
  }
  

}
