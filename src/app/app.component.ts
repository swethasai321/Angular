import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hellobridge from vindyaa';
  imgUrl="../asserts/BL_logo_square_jgp.jpg";
  url = "https://www.bridgelabz.com";
  userName: string = "";
  nameError: string= "";

  ngonInit():void {
    this.title = "Hello from Vindyaa.";
  }
  onClick($event: any){
    console.log("save button is clicked!", $event);
    window.open(this.url, "_blank");
}
onInput($event:any) {
  console.log("change event occurred!",$event.data);
  const nameRegex= RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
  if(nameRegex.test(this.userName)){
  this.nameError = "";
  return;
}
this.nameError = "Name is Incorrect";
 }
}