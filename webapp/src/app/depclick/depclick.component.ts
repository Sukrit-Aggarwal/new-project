import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-depclick',
  templateUrl: './depclick.component.html',
  styleUrls: ['./depclick.component.scss']
})
export class DepclickComponent {
  subscription = new Subscription();
  name: any;
  list:any;
  depinstname:any;
  
  url1 = 'http://127.0.0.1:5000/fulllist/dependency_instance'
  url10 = ''
  
  constructor(private route: ActivatedRoute, private service:PostService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    console.log("---DepClick---")
    console.log(this.name);

    this.getDepInstList();
    
  }

  public getDepInstList(){
    console.log('---getDepInstList---')
    this.url10 = this.url1 + "?dependency=" + this.name;
    console.log(this.url10);  
    
    this.subscription.add(
      this.service.getPosts(this.url10)
      .subscribe(res => {
        console.log('---subscribe1---');
        this.depinstname = res["dependency_instance"];
        console.log(this.depinstname);
      },)
    );
  }

}
