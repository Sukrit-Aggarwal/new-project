import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-ipadclick',
  templateUrl: './ipadclick.component.html',
  styleUrls: ['./ipadclick.component.scss']
})
export class IpadclickComponent {
  subscription = new Subscription();
  name: any;
  list:any;
  compinstname:any;
  servicename:any;
  depname:any;
  
  
  url3 = 'http://127.0.0.1:5000/fulllist/component_instance'
  url30 = ''
  
  constructor(private route: ActivatedRoute, private service:PostService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    console.log("---CompClick---")
    console.log(this.name);

    this.getCompInstList();
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


}
