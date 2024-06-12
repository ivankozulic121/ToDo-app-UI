import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCommonModule } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { ApiService } from './services/api.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet, MatToolbarModule, MatIconModule, LoginComponent, RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  showMenu = true
  username = ''
  title = 'todo-ui';

  constructor(private apiService: ApiService) {}


  ngOnInit(): void {

    this.apiService.jwtUserToken().subscribe( token =>{

      if (token) {
        const decoded: any = jwtDecode(token);
        this.username = decoded.username
      }
      
      if (this.username) {
        this.showMenu = false;
        
      }
      else{
        this.showMenu = true;
      }
    })
  }

  logout(){
    this.username = '';
    this.apiService.logout();
  }
}
