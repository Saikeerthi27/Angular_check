import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  formSubmit(ref:NgForm){
  let pobj=ref.value;
    console.log(pobj);
}
  // data:string;
  // sendData(v){
  // this.data=v;
  //  }
}






//Code for pushing objs to array - user registration form 

// export class AppComponent{

//   details=[] as any;
  
//   formSubmit(ref:NgForm){

//     //get form object
//     let formObj=ref.value;
//     //pushing the object to the array details
//     this.details.push(formObj);

//     //to reset the data
//     ref.reset();
//   }
// }