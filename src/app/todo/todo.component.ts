import { NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatOption, MatSelect } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [MatFormField, MatLabel, MatSelect, MatOption, NgFor, MatToolbarModule, MatCardModule, MatIconModule, MatInputModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {

  title: string;
  description: string;
  constructor(public dialogRef: MatDialogRef<TodoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}


  onCancel() {
    this.dialogRef.close();
  }

  create(){
    this.dialogRef.close({title: this.title, description: this.description});
  }

}
