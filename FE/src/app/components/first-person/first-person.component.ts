import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-first-person',
  templateUrl: './first-person.component.html',
  styleUrls: ['./first-person.component.css']
})
export class FirstPersonComponent implements OnInit {


  data = new Array();
  constructor(private service: GamesService) { }

  ngOnInit(): void {

    this.getData();
  }

  getData(){
    this.service.getAll().subscribe( income => {


      income.forEach(obj => {
        if (obj.categories === 'First-Person' ){
          this.data.push(obj);
        }
      })
      console.log(this.data);
    })
  }

}
