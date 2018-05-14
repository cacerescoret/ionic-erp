import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-listado-clientes',
  templateUrl: 'listado-clientes.html',
})
export class ListadoClientesPage {

  clientes:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient,
              public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.cargarClientes();
  }

  cargarClientes(){
    let url = "http://localhost:3000/cliente";
    this.http.get(url)
            .map((resp:any)=>{
              return resp
            })
            .subscribe((resp:any)=>{
              this.clientes = resp.clientes;
            },(error)=>{
              console.log(error);
            })
  }

  verCliente(cliente){
    this.navCtrl.push('VerClientePage', {cliente: cliente})
  }

  crearCliente(){
    let modal = this.modalCtrl.create('CrearClientePage');

    // modal.onDidDismiss( cliente =>{
    //   if(cliente){
    //     this.clientes.push(cliente); 
    //   }
    // })

    modal.onDidDismiss(()=>{
      this.cargarClientes();
    })

    modal.present();

  }

  editarCliente(cliente){
    this.navCtrl.push('EditarClientePage', {cliente: cliente})
  }


}
