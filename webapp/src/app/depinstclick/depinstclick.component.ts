import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-depinstclick',
  templateUrl: './depinstclick.component.html',
  styleUrls: ['./depinstclick.component.scss']
})
export class DepinstclickComponent {
  subscription = new Subscription();
  name: any;
  list:any;
  
  constructor(private route: ActivatedRoute, private service:PostService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    console.log("---CompClick---")
    console.log(this.name);

  }


}
