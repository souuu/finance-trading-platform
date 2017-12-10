import { Component, OnInit } from '@angular/core';
import {Order} from "../core/user.model";
import {BusinessService} from "../core/business.service";
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

    public tableData2: TableData;
    orders:Order[]=[];
  constructor(private businessService:BusinessService) { }

  ngOnInit() {

      this.businessService.getOrders().then(data=> {
          this.orders=data.orders;
          for (let i=0;i<this.orders.length;i++){
              let table=[];
              table.push(this.orders[i].valeur);
              table.push(this.orders[i].va);
              table.push(this.orders[i].quantite);
              table.push(this.orders[i].type);
              table.push(this.orders[i].status);
              this.tableData2.dataRows.push(table);
          }


      });
      this.tableData2 = {
          headerRow: [ 'Nom','V/A', 'Quantité', 'Type', 'Status'],
          dataRows: [
          ]
      };
  }

}
