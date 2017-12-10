import { Injectable } from '@angular/core' ;
import { Http, Headers,Response } from '@angular/http';
import {Transaction, User} from "./user.model";

@Injectable()
export class BusinessService {

    private headers = new Headers({
        'Content-Type': 'application/json'
    });

    constructor(private http:Http) {
    }

    registerUser(user:User) {
        return this.http.post("http://localhost:3000/register", JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getUser() {
        let user=localStorage.getItem('user');
        return this.http.get("http://localhost:3000/getUser/"+user, {headers: this.headers})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    getUserValeurs() {
        let user=localStorage.getItem('user');
        return this.http.get("http://localhost:3000/getUserValeurs/"+user, {headers: this.headers})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    addToBalance(somme:string) {
        let user=localStorage.getItem('user');
        return this.http.get("http://localhost:3000/addToUserBalance/"+user+"/"+somme, {headers: this.headers})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    loginUser(username:string,password:string){
        let user= {
            "username":username,
            "password":password
        };
        return this.http.post("http://localhost:3000/login", JSON.stringify(user), {headers: this.headers})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    getCours() {
        return this.http.get("http://localhost:3000/allCours", {headers: this.headers})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    getCoursByName(coursName:string) {
        return this.http.get("http://localhost:3000/getCours/"+coursName, {headers: this.headers})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    getOrders() {
        let user=localStorage.getItem('user');
        return this.http.get("http://localhost:3000/getUserOrders/"+user, {headers: this.headers})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }
    getHistory() {
        let user=localStorage.getItem('user');
        return this.http.get("http://localhost:3000/getUserHistory/"+user, {headers: this.headers})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    execTransaction(transaction:Transaction){
        return this.http.post("http://localhost:3000/execTransaction", JSON.stringify(transaction), {headers: this.headers})
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json();
        return body;
    }

    private handleError(error:Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg:string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    }

}