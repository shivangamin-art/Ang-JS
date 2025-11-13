import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from '../model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {

  title = 'angular-course';  // fixes unit test

  // Load the first 4 courses
  courses: Course[] = COURSES.slice(0, 4);

}
