import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  title:string;
  color:any;
  constructor(){
   this.titleChange();
 // this.title="app works!"
 }
  titleChange(){
    let _this=this;
    setInterval(function(){
      
      _this.title="我的值永远在变化"+Math.ceil(Math.random()*1000)+"我的颜色千变万化"; 
      _this.color= "#"+Math.ceil(Math.random()*1000000);
    },100)
  }
}
