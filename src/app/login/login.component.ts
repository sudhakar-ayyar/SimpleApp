import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  uname = '';
  redirecttowelcome(){
    if(!this.uname){
      alert('Enter Required Field')
      return ''
    }
    this.router.navigate(['Welcome', this.uname])
  }

}
