import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user = '';
  constructor(public router: ActivatedRoute) {
     this.user = this.router.snapshot.params.user
   }

  ngOnInit(): void {
  }
  
}
