import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent  implements OnInit {

  menu:String[]=
    ['uno','dos','tres']
  ;
  constructor() { }

  ngOnInit() {}

}
