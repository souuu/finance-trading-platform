import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'Valeur','V/A', 'Quantité', 'Type', 'Status'],
          dataRows: [
              ['AMEN BANK','Vente', '25 actions', 'Au marché', 'En attente'],
              ['BANQUE ATTIJARI DE TUNIS','Vente', '45 actions', 'A cours limité', 'En Exécution'],
              ['BANQUE DE HABITAT','Achat', '30 actions', 'Au marché', 'En attente'],
              ['BANQUE NATIONALE AGRICOLE','Achat', '25 actions', 'Au marché', 'En attente'],
              ['AMEN BANK','Vente', '25 actions', 'Au marché', 'En attente'],
              ['BANQUE ATTIJARI DE TUNIS','Vente', '45 actions', 'A cours limité', 'En Exécution'],
              ['BANQUE DE HABITAT','Achat', '30 actions', 'Au marché', 'En attente'],
              ['BANQUE NATIONALE AGRICOLE','Achat', '25 actions', 'Au marché', 'En attente'],
              ['AMEN BANK','Vente', '25 actions', 'Au marché', 'En attente'],
              ['BANQUE ATTIJARI DE TUNIS','Vente', '45 actions', 'A cours limité', 'En Exécution'],
              ['BANQUE DE HABITAT','Achat', '30 actions', 'Au marché', 'En attente'],
              ['BANQUE NATIONALE AGRICOLE','Achat', '25 actions', 'Au marché', 'En attente']
          ]
      };
  }

}
