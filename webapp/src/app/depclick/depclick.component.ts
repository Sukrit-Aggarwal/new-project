import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'
import { saveAs } from 'file-saver';

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

  downloadFile(): void {

    if(this.name === '1A-Business-Relay-Access to 1A-Business-Relay-POP'){
      const filePath = 'assets/dependency_1A-Business-Relay-Access to 1A-Business-Relay-POP_1.0.8871.csv';
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
