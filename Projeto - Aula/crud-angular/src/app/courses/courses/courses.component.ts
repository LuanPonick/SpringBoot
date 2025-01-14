import { CoursesService } from '../../../../public/services/courses-service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { CoursesInterface } from '../../../../public/models/curses/curses.model/curses.modeule';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  imports: [CommonModule, MatTableModule, MatCardModule,MatToolbarModule],
  standalone: true,
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['colum-_id','colum-name', 'colum-category'];
  dataSource: CoursesInterface[] = [];

  constructor(private coursesService: CoursesService) {
  }
  ngOnInit(): void {
    this.dataSource = this.coursesService.getList();
  }
}
