import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit() {
      this.tableData2 = {
          headerRow: [ 'Nom','Ouverture', '+Haut', '+Bas', 'Volume(Dinars)','Dernier','Veille','Vartiation'],
          dataRows: [
              ['AMEN BANK','24.85', '24.85', '24.40', '141 513','24.84','24,85','-0.04%'],
              ['ARTES','6.40', '6.51', '6.40', '19 302','6.51','6,40','+1.72%'],
              ['AMEN BANK','24.85', '24.85', '24.40', '141 513','24.84','24,85','-0.04%'],
              ['ARTES','6.40', '6.51', '6.40', '19 302','6.51','6,40','+1.72%'],
              ['AMEN BANK','24.85', '24.85', '24.40', '141 513','24.84','24,85','-0.04%'],
              ['ARTES','6.40', '6.51', '6.40', '19 302','6.51','6,40','+1.72%'],
              ['AMEN BANK','24.85', '24.85', '24.40', '141 513','24.84','24,85','-0.04%'],
              ['ARTES','6.40', '6.51', '6.40', '19 302','6.51','6,40','+1.72%'],
              ['AMEN BANK','24.85', '24.85', '24.40', '141 513','24.84','24,85','-0.04%'],
              ['ARTES','6.40', '6.51', '6.40', '19 302','6.51','6,40','+1.72%'],
              ['AMEN BANK','24.85', '24.85', '24.40', '141 513','24.84','24,85','-0.04%'],
              ['ARTES','6.40', '6.51', '6.40', '19 302','6.51','6,40','+1.72%']
          ]
      };
  }

}
