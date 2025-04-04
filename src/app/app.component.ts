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
  course:'',
  grade:0

};

  students: any[] = [];

  submit() {
    if (this.student.name && this.student.age && this.student.email && this.student.course && this.student.grade) {
      let p_color='';
      if(this.student.grade>0 && this.student.grade<40){
        p_color='red';
      }
      else if(this.student.grade>40 && this.student.grade<61){
        p_color='bright yellow';
      }
      else if(this.student.grade>60 && this.student.grade<81){
        p_color='blue';
      }
      else if(this.student.grade>80 && this.student.grade<=100){
        p_color='green';
      }
      else {
        p_color='black'
      }
      this.students.push({ ...this.student,p_color });
      this.student = { name: '', age: 0, email: '' ,course:'',grade:0}; // Reset form
    }
  }
  deleteStudent(index: number) {
    this.students.splice(index);
  }
}
