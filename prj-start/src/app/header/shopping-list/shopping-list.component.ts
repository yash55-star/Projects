import { Component, OnInit } from '@angular/core';
import { ingrediants } from 'src/app/shared/ingrediants.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  ingrediants : ingrediants[] = [

    new ingrediants('Apple',10),
    new ingrediants('Tomatoes',70)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
