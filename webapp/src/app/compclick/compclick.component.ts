import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-compclick',
  templateUrl: './compclick.component.html',
  styleUrls: ['./compclick.component.scss']
})
export class CompclickComponent {
  subscription = new Subscription();
  name: any;
  list:any;
  compinstname:any;
  servicename:any;
  depname:any;
  
  
  url3 = 'http://127.0.0.1:5000/fulllist/component_instance'
  url30 = ''
  url4 = 'http://127.0.0.1:5000/fulllist/service'
  url40 = ''
  url5 = 'http://127.0.0.1:5000/fulllist/dependency'
  url50 = ''
  
  constructor(private route: ActivatedRoute, private service:PostService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    console.log("---CompClick---")
    console.log(this.name);

    this.getCompInstList();
    this.getServiceList();
    this.getDepList();
  }

  public getCompInstList(){
    console.log('---getCompInstList---')
    this.url30 = this.url3 + "?component=" + this.name;
    console.log(this.url30);  
    
    this.subscription.add(
      this.service.getPosts(this.url30)
      .subscribe(res => {
        console.log('---subscribe3---');
        this.compinstname = res["component_instance"];
        console.log(this.compinstname);
      },)
    );
  }

  public getServiceList(){
    console.log('---getServiceList---')
    this.url40 = this.url4 + "?component=" + this.name;
    console.log(this.url40);  
    
    this.subscription.add(
      this.service.getPosts(this.url40)
      .subscribe(res => {
        console.log('---subscribe4---');
        this.servicename = res["service"];
        console.log(this.servicename);
      },)
    );
  }

  public getDepList(){
    console.log('---getDepList---')
    this.url50 = this.url5 + "?component=" + this.name;
    console.log(this.url50);  
    
    this.subscription.add(
      this.service.getPosts(this.url50)
      .subscribe(res => {
        console.log('---subscribe5---');
        this.depname = res["dependency"];
        console.log(this.depname);
      },)
    );
  }




}
