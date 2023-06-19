import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'
import { saveAs } from 'file-saver';

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
  comps:any
  
  url2 = 'http://127.0.0.1:5000/fulllist/component';
  url20 = ''
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
    this.getCompList(this.url2)
  }

  public getCompList(url2:any){
    console.log('---getCompList---')
    this.url20 = this.url2 + "?name=" + this.name;
    console.log(this.url20);

    this.subscription.add(
      this.service.getPosts(url2)
      .subscribe(res => {
        console.log('--------');
        this.comps = res["component"][0]["parents"];
        console.log(this.comps)
      },)
    );
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

  downloadFile(): void {

    if(this.name === '1A-Business-Relay-Access'){
      const filePath = 'assets/component_1A-Business-Relay-Access_1.0.8871.csv';
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
