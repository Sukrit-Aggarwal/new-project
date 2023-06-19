import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-scopeclick',
  templateUrl: './scopeclick.component.html',
  styleUrls: ['./scopeclick.component.scss']
})

export class ScopeclickComponent implements OnInit{
  subscription = new Subscription();
  name: any;
  list:any;
  replink:any
  compname:any
  compinstname:any;
  servicename:any;
  depname:any;
  depinstname:any;
  ipadinstname:any;

  url1 = 'http://127.0.0.1:5000/fulllist/scope'
  url10 = ''
  url2 = 'http://127.0.0.1:5000/fulllist/component'
  url20 = ''
  url3 = 'http://127.0.0.1:5000/fulllist/component_instance'
  url30 = ''
  url4 = 'http://127.0.0.1:5000/fulllist/service'
  url40 = ''
  url5 = 'http://127.0.0.1:5000/fulllist/dependency'
  url50 = ''
  url6 = 'http://127.0.0.1:5000/fulllist/dependency_instance'
  url60 = ''
  url7 = 'http://127.0.0.1:5000/fulllist/ipaddress_instance'
  url70 = ''
  
  constructor(private route: ActivatedRoute, private service:PostService) { }
  

  
  public getRepolink(){
    console.log("---getRepolink---")
    this.url10 = this.url1 + "?name=" + this.name;
    console.log(this.url10);
    
    this.subscription.add(
      this.service.getPosts(this.url10)
      .subscribe(res => {
        console.log('---subscribe1---');
        this.list = res["scope"];
        console.log(this.list);
        this.replink = this.list[0].repository_url;
        console.log(this.replink);
      },)
    );
  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    console.log("---ScopeClick---")
    console.log(this.name);
    this.getRepolink();
    this.getCompList();
    this.getCompInstList();
    this.getServiceList();
    this.getDepList();
    this.getDepInstList();
    this.getIPAdInstList();
  }


  public getCompList(){
    console.log('---getCompList---')
    this.url20 = this.url2 + "?scope=" + this.name;
    console.log(this.url20);  
    
    this.subscription.add(
      this.service.getPosts(this.url20)
      .subscribe(res => {
        console.log('---subscribe2---');
        this.compname = res["component"];
        console.log(this.compname);
      },)
    );
  }

  public getCompInstList(){
    console.log('---getCompInstList---')
    this.url30 = this.url3 + "?scope=" + this.name;
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
    this.url40 = this.url4 + "?scope=" + this.name;
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
    this.url50 = this.url5 + "?scope=" + this.name;
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

  public getDepInstList(){
    console.log('---getDepInstList---')
    this.url60 = this.url6 + "?scope=" + this.name;
    console.log(this.url60);  
    
    this.subscription.add(
      this.service.getPosts(this.url60)
      .subscribe(res => {
        console.log('---subscribe6---');
        this.depinstname = res["dependency_instance"];
        console.log(this.depinstname);
      },)
    );
  }

  public getIPAdInstList(){
    console.log('---getIPAdInstList---')
    this.url70 = this.url7 + "?scope=" + this.name;
    console.log(this.url70);  
    
    this.subscription.add(
      this.service.getPosts(this.url70)
      .subscribe(res => {
        console.log('---subscribe7---');
        this.ipadinstname = res["ipaddress_instance"];
        console.log(this.ipadinstname);
      },)
    );
  }


  downloadFile(): void {

    if(this.name === '1A4DEV'){
      const filePath = 'assets/scope_1A4DEV_1.0.8871.csv';
      const fileName = this.getFileNameFromPath(filePath);
      fetch(filePath)
      .then(response => response.blob())
      .then(blob => {
        saveAs(blob, fileName);
      })
      .catch(error => {
        console.error('Error downloading the file:', error);
      });
    }

  }

  private getFileNameFromPath(path: string): string {
    return path.split('/').pop()!;
  }
  
}

