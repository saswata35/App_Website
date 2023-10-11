import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-pp2';

  instituteName: string = "MCKV Institute of Engineering";
  address:string = "Liluah, Howrah,West Bengal";

  itemImageUrl='../assets/image/image-1.jpg';
  
  navStyle = 'background-color: #333;  margin: 0;  overflow: hidden;';
  navUlStyle = 'margin: 0;  padding: 0;';
  navUlLiStyle = 'display: inline-block;  list-style-type: none;';
  navUlLiHypStyle = `color: #aaa;  background-color:rgb(56, 56, 53);
                     display: block;  line-height: 2em;  padding: 0.5em 0.5em;
                     text-decoration: none;`;
  linkStyle = 'underline';
  activeLinkStyle = 'overline';

  myColspan:number=2;

  myClassBinding:boolean=true;

  addedDStudentName:any;
  addedDStudentRoll:any;

  studentName2way:any;
  studentRoll2way:any;



  departmentName:string="CSE";
  departmentName2:string="CSE";

  addNewStudent(studentName:any, studentRoll:any){
    console.log('Student added:',studentName.value,studentRoll.value);
    
    this.addedDStudentName=studentName.value;
    this.addedDStudentRoll=studentRoll.value;
    
    studentName.value=' ';
    studentRoll.value=' ';
  }

  test(DEPTNAME:any){
    console.log(DEPTNAME.value);

    this.departmentName=DEPTNAME.value;
  }
}

