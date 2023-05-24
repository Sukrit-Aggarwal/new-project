import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-audservclick',
  templateUrl: './audservclick.component.html',
  styleUrls: ['./audservclick.component.scss']
})
export class AudservclickComponent {

  subscription = new Subscription();
  name: any;
  list:any;
  depinstname:any;
  new_url:any
  
  url5 = 'http://127.0.0.1:5000/fulllist/dependency_instance'
  url50 = ''
  
  constructor(private route: ActivatedRoute, private service:PostService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    console.log("---CompClick---")
    console.log(this.name);

    this.getDepInstList();
  }

  public getDepInstList(){
    console.log('---getDepInstList---')
    this.url50 = this.url5 + "?service=" + this.name;
    this.new_url = encodeURI(this.url50)
    console.log(this.new_url);  
    
    this.subscription.add(
      this.service.getPosts(this.new_url)
      .subscribe(res => {
        console.log('---subscribe5---');
        this.depinstname = res["dependency_instance"]
        console.log(this.depinstname);
      },)
    );
  }

}
