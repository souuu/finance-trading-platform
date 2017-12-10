import { Component, OnInit } from '@angular/core';
import {Cours} from "../core/user.model";
import {BusinessService} from "../core/business.service";
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}


@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

    public tableData2: TableData;
    cours:Cours[]=[];
  constructor(private businessService:BusinessService) { }

  ngOnInit() {

      this.businessService.getCours().then(data=> {
          this.cours=data.cours;
          for (let i=0;i<this.cours.length;i++){
              let table=[];
              table.push(this.cours[i].nom);
              table.push(this.cours[i].ouverture);
              table.push(this.cours[i].haut);
              table.push(this.cours[i].bas);
              table.push(this.cours[i].volume);
              table.push(this.cours[i].dernier);
              table.push(this.cours[i].variation);
              this.tableData2.dataRows.push(table);
          }


      });
      this.tableData2 = {
          headerRow: [ 'Nom','Ouverture', '+Haut', '+Bas', 'Volume(Dinars)','Dernier','Vartiation'],
          dataRows: [
          ]
      };
  }

}
