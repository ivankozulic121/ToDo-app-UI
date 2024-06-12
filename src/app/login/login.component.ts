import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonModule, NgIf } from '@angular/common';
//import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[NgIf,RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private apiService: ApiService,
    private router: Router) {
}


/*ngOnInit(): void {
 const token = localStorage.getItem('accessToken')
if (token) {
this.router.navigateByUrl('/').then();
}}*/


@ViewChild('loginForm') form: NgForm
login(loginForm: NgForm) {
if (loginForm.invalid) {
return;
}
const {username, password} = loginForm.value;
this.apiService.login(username, password);
return loginForm.reset();
}
}
