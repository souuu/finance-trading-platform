import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {OrderModalComponent} from "../order-modal/order-modal.component";
import {BusinessService} from "../core/business.service";
import {Cours, GetUser} from "../core/user.model";
import {History} from "../core/user.model";
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
    constructor(private modalService: NgbModal,private businessService:BusinessService){
    }
    public tableData1: TableData;
    public tableData2: TableData;
    cours:Cours[]=[];
    history:History[];
    user:GetUser={};
    numberCours=0;
    open(cours:string) {
        console.log(cours);
        const modalRef = this.modalService.open(OrderModalComponent);
        modalRef.componentInstance.cours = cours;
    }

    ngOnInit(){
        this.businessService.getUser().then(data=> {
            this.user=data.user;
        });
        this.businessService.getOrders().then(data=> {
            console.log(data);
            this.numberCours=data.orders.length;
        });
        this.businessService.getCours().then(data=> {
            this.cours=data.cours;
            for (let i=0;i<5;i++){
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
        this.businessService.getHistory().then(data=> {
            this.history=data.historiques;
            for (let i=0;i<data.historiques.length;i++){
                if (i<5) {
                    let table=[];
                    table.push(this.history[i].valeur);
                    table.push(this.history[i].va);
                    table.push(this.history[i].type);
                    table.push(this.history[i].status);
                    table.push(this.history[i].timestamp);
                    this.tableData1.dataRows.push(table);
                }
            }
        });
        this.tableData1 = {
            headerRow: [ 'Valeur','V/A', 'Type', 'Status','Date'],
            dataRows: [
            ]
        };
        this.tableData2 = {
            headerRow: [ 'Nom','Ouverture', '+Haut', '+Bas', 'Volume(Dinars)','Dernier','Vartiation'],
            dataRows: []
        };

        var dataSales = {
          labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
          series: [
             [287, 385, 490, 562, 594, 626, 698, 895, 952],
            [67, 152, 193, 240, 387, 435, 535, 642, 744],
            [23, 113, 67, 108, 190, 239, 307, 410, 410]
          ]
        };

        var optionsSales = {
          low: 0,
          high: 1000,
          showArea: true,
          height: "245px",
          axisX: {
            showGrid: false,
          },
          lineSmooth: Chartist.Interpolation.simple({
            divisor: 3
          }),
          showLine: true,
          showPoint: false,
        };

        var responsiveSales = [
          ['screen and (max-width: 640px)', {
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        //Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


        var data = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895]
          ]
        };

        var options = {
            seriesBarDistance: 10,
            axisX: {
                showGrid: false
            },
            height: "245px"
        };

        var responsiveOptions = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc: function (value) {
                return value[0];
              }
            }
          }]
        ];

        Chartist.Line('#chartActivity', data, options, responsiveOptions);

        var dataPreferences = {
            series: [
                [25, 30, 20, 25]
            ]
        };

        var optionsPreferences = {
            donut: true,
            donutWidth: 40,
            startAngle: 0,
            total: 100,
            showLabel: false,
            axisX: {
                showGrid: false
            }
        };
    }
}
