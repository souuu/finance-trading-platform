import { Component, OnInit } from '@angular/core';
import {BusinessService} from "../core/business.service";
import {GetUser, Valeur} from "../core/user.model";
import {Utils} from "../core/utils";

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
    valeurs:Valeur[]=[];
    user:GetUser={};
    showInput=false;
    somme="100";

  constructor(private businessService:BusinessService) { }

  ngOnInit() {
      this.businessService.getUser().then(data=> {
          this.user=data.user;
      });
      this.businessService.getUserValeurs().then(data=> {
          this.valeurs=data.valeurs;
          for (let i=0;i<this.valeurs.length;i++){
              let table=[];
              table.push(this.valeurs[i].nom);
              table.push(this.valeurs[i].quantite);
              table.push(this.valeurs[i].moyenpondere);
              table.push(this.valeurs[i].derniercours);
              table.push(this.valeurs[i].variation);
              this.tableData1.dataRows.push(table);
          }
      });
      this.tableData1 = {
          headerRow: [ 'Valeur', 'Quantité','Cours Moyen pondéré',"Dernier cours","Variation"],
          dataRows: [
          ]
      };
  }
  chargerCompte(){
        this.businessService.addToBalance(this.somme).then(data=> {
            if (Utils.check(data.success)) {
                if (data.success==true) {
                    this.user.portfoliobalance=(parseInt(this.somme)+parseInt(this.user.portfoliobalance))+'';
                    this.showInput=false;
                }
            }
        })
  }

}
