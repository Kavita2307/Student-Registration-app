import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-registration-app';
  // isDisplay=true;
  buttonname='Submit';
  student={
  name:'',
  age:0,
  email:'',
  course:''
};

  students: any[] = [];

  submit() {
    if (this.student.name && this.student.age && this.student.email && this.student.course) {
      this.students.push({ ...this.student });
      this.student = { name: '', age: 0, email: '' ,course:''}; // Reset form
    }
  }

  // showHide(){
  //   this.isDisplay=!this.isDisplay;
  //   if(this.buttonname='Hide'){
  //     this.buttonname='Show'
  //   }
  //   else{
  //     this.buttonname='Hide';
  //   }
  // }
  // students:{id:number,name:string,age:number}[]=[
  //   {
  //     id:101,
  //     name:'Kavita',
  //     age:29
  //   },
  //   {
  //     id:102,
  //     name:'Kavish',
  //     age:5
  //   }
  // ]
}
