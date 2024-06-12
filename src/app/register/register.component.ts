import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

constructor( private apiService: ApiService){

}
@ViewChild('registerForm') form: NgForm
register( registerForm: NgForm) {

  if( registerForm.invalid){
    return;
  }
console.log(registerForm.value)
const { username, password} = registerForm.value;
this.apiService.register(username,password);
return registerForm.resetForm()

}
}
