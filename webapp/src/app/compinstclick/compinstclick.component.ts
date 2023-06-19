import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-compinstclick',
  templateUrl: './compinstclick.component.html',
  styleUrls: ['./compinstclick.component.scss']
})
export class CompinstclickComponent {

  subscription = new Subscription();
  name: any;
  list:any;
  depinstname:any;
  ipadinstname:any
  
  
  url3 = 'http://127.0.0.1:5000/fulllist/dependency_instance'
  url30 = ''
  url4 = 'http://127.0.0.1:5000/fulllist/ipaddress_instance'
  url40 = ''
  
  
  constructor(private route: ActivatedRoute, private service:PostService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    console.log("---CompClick---")
    console.log(this.name);

    this.getDepInstList();
    this.getIpadInstList();
  }

  public getDepInstList(){
    console.log('---getDepInstList---')
    this.url30 = this.url3 + "?component_instance=" + this.name;
    console.log(this.url30);  
    
    this.subscription.add(
      this.service.getPosts(this.url30)
      .subscribe(res => {
        console.log('---subscribe3---');
        this.depinstname = res["dependency_instance"];
        console.log(this.depinstname);
      },)
    );
  }

  public getIpadInstList(){
    console.log('---getIpadInstList---')
    this.url40 = this.url4 + "?component_instance=" + this.name;
    console.log(this.url40);  
    
    this.subscription.add(
      this.service.getPosts(this.url40)
      .subscribe(res => {
        console.log('---subscribe4---');
        this.ipadinstname = res["ipaddress_instance"];
        console.log(this.ipadinstname);
      },)
    );
  }


  downloadFile(): void {

    if(this.name === '158107052883-argos-metrics-exporter'){
      const filePath = 'assets/component_instance_158107052883-argos-metrics-exporter_1.0.8871.csv';
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
