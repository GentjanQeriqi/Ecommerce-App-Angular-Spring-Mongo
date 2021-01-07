import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-open-world',
  templateUrl: './open-world.component.html',
  styleUrls: ['./open-world.component.css']
})
export class OpenWorldComponent implements OnInit {


  data = new Array();
  constructor(private service: GamesService) { }

  ngOnInit(): void {

    this.getData();
  }

  getData(){
    this.service.getAll().subscribe( income => {


      income.forEach(obj => {
        if (obj.categories === 'Open World'){
          this.data.push(obj);
        }
      })
      console.log(this.data);
    })
  }

}
