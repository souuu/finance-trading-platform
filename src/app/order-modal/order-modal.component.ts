import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {BusinessService} from "../core/business.service";
import {Cours, Transaction} from "../core/user.model";

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {

    coursLimite=false;
    @Input() cours;
    currentCours:Cours;
    nom="";
    ouverture="";
    dernier="";
    quantity="25";
    price="20";
  constructor(public activeModal: NgbActiveModal,private businessService:BusinessService) { }

  ngOnInit() {
      console.log(this.cours);
      this.businessService.getCoursByName(this.cours).then(data=> {
          this.currentCours=data.cours;
          this.nom=this.currentCours.nom;
          this.ouverture=this.currentCours.ouverture;
          this.dernier=this.currentCours.dernier;
      })

  }

  buyCours(){
      console.log(localStorage.getItem('user'));
      let transaction:Transaction={};
      transaction.username=localStorage.getItem('user');
      transaction.nomCours=this.currentCours.nom;
      transaction.orderid="TEST";
      transaction.orderqty=this.quantity;
      transaction.side="buy";
      transaction.ordertype="market";
      transaction.symbol="BHF";
      transaction.price=this.currentCours.dernier;
      console.log(transaction);
      this.businessService.execTransaction(transaction).then(data=> {
          console.log(data);
          this.activeModal.close('Close click');
      })
  }

}
