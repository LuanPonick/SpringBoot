import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Curses } from '../../../../public/models/curses/curses.model/curses';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

const ELEMENT_DATA: Curses[] = [
  {_id: "1", category: "a", name: "teste"}
];

@Component({
  selector: 'app-courses',
  imports: [CommonModule, MatTableModule, MatCardModule,MatToolbarModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent{
  displayedColumns: string[] = ['colum-_id','colum-name', 'colum-category'];
  dataSource = ELEMENT_DATA;
}
