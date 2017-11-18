import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-portefeuille',
  templateUrl: './portefeuille.component.html',
  styleUrls: ['./portefeuille.component.css']
})
export class PortefeuilleComponent implements OnInit {

    public tableData1: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'Valeur', 'Quantité'],
          dataRows: [
              ['AMEN BANK','25 actions'],
              ['BANQUE ATTIJARI DE TUNIS','45 actions'],
              ['BANQUE DE HABITAT','30 actions'],
              ['BANQUE NATIONALE AGRICOLE','25 actions']
          ]
      };
  }

}
