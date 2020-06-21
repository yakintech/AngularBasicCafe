import { Component, OnInit } from '@angular/core';
import { foods, drinks } from 'src/data/menusrc';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menufoods = foods;
  menudrinks = drinks

  constructor() { }

  ngOnInit(): void {
    
  }

}
