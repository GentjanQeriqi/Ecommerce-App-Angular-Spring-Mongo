import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.css']
})
export class RPGComponent implements OnInit {

  data = new Array();
  constructor(private service: GamesService) { }

  ngOnInit(): void {

    this.getData();
  }

  getData(){
    this.service.getAll().subscribe( income => {


      income.forEach(obj => {
        if (obj.categories === 'RPG' ){
          this.data.push(obj);
        }
      })
      console.log(this.data);
    })
  }

}
