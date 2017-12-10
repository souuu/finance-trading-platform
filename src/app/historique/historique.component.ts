import { Component, OnInit } from '@angular/core';
import {BusinessService} from "../core/business.service";
import {History} from "../core/user.model";
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

    public tableData1: TableData;
    history:History[];

  constructor(private businessService:BusinessService) { }

  ngOnInit() {
      this.businessService.getHistory().then(data=> {
          this.history=data.historiques;
          for (let i=0;i<data.historiques.length;i++){

                  let table=[];
                  table.push(this.history[i].valeur);
                  table.push(this.history[i].va);
                  table.push(this.history[i].type);
                  table.push(this.history[i].status);
                  table.push(this.history[i].timestamp);
                  this.tableData1.dataRows.push(table);

          }
      });
      this.tableData1 = {
          headerRow: [ 'Valeur','V/A', 'Type', 'Status','Date'],
          dataRows: [
          ]
      };
  }

}
