import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'button-test',
  templateUrl: './button-test.component.html',
  styleUrls: ['./button-test.component.scss']
})
export class ButtonTestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnClick = function() {
    this.router.navigateByUrl('/prueba');
  }

}
