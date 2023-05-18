import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-scopeclick',
  templateUrl: './scopeclick.component.html',
  styleUrls: ['./scopeclick.component.scss']
})

export class ScopeclickComponent implements OnInit{
  subscription = new Subscription();
  name: any;
  scopes:any;
  replink:any

  url1 = 'http://127.0.0.1:5000/fulllist/scope'
  url2 = ''
  
  constructor(private route: ActivatedRoute, private service:PostService) { }
  

  
  public repolink(name:any){
    console.log("---repolink---")
    this.url2 = this.url1 + "?name=" + name;
    console.log(this.url2);
    this.getScopeList(this.url2);
  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    console.log("---ScopeClick---")
    console.log(this.name);
    this.repolink(this.name);
  }

  public getScopeList(url1:any){
    console.log('---getScopeList---')
    this.subscription.add(
      this.service.getPosts(url1)
      .subscribe(res => {
        console.log('---subscribe---');
        this.scopes = res["scope"];
        console.log(this.scopes);
        this.replink = this.scopes[0].repository_url;
        console.log(this.replink);
      },)
    );
  }

  
}

