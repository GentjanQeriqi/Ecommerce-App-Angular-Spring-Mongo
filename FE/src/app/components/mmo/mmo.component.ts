import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-mmo',
  templateUrl: './mmo.component.html',
  styleUrls: ['./mmo.component.css']
})
export class MMOComponent implements OnInit {


  data = new Array();
  constructor(private service: GamesService) { }

  ngOnInit(): void {

    this.getData();
  }

  getData(){
    this.service.getAll().subscribe( income => {


      income.forEach(obj => {
        if (obj.categories === 'MMO'){
          this.data.push(obj);
        }
      })
      console.log(this.data);
    })
  }

}

