import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-crear-cliente',
  templateUrl: 'crear-cliente.html',
})
export class CrearClientePage {

  cliente = {
    nombre: null,
    cif: null,
    domicilio: null,
    cp: null,
    localidad: null,
    provincia: null,
    telefono: null,
    email: null,
    contacto: null
  }

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: HttpClient,
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CrearClientePage');
  }

  crearCliente(){
    let cliente = {
      nombre: this.cliente.nombre,
      cif: this.cliente.cif,
      domicilio: this.cliente.domicilio,
      cp: this.cliente.cp,
      localidad: this.cliente.localidad,
      provincia: this.cliente.provincia,
      telefono: this.cliente.telefono,
      email: this.cliente.email,
      contacto: this.cliente.contacto
    }
    let url = "http://localhost:3000/cliente";
    this.http.post(url, cliente)
            .subscribe((res:any)=>{
              //this.viewCtrl.dismiss(cliente);
              this.viewCtrl.dismiss();
            },(error)=>{
              console.log(error);
            })
  }

  cancelar(){
    this.viewCtrl.dismiss();
  }


}
