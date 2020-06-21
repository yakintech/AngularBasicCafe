import { Component, OnInit } from '@angular/core';
import { drinks } from 'src/data/menusrc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  openstatus = false;
  openhours = "Open from 10:00 to 18:00";
  constructor() { }

  ngOnInit(): void {
    var d =new Date();
    
    if(d.getHours() > 10  && d.getHours() < 18 && d.getDay() != 0){
      this.openstatus = true;
    }
  }

}
