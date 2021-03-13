import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre = null;
  apellido = null;
  celular = null;
  email = null;

  usuarios = [];// este es un arreglo vacio


  constructor(public alertController: AlertController) {}
    guardarDatos() {//esta es una funcion la que se comunicar con el hatml
      //agregando datos a la base de datos en memoria
      this.usuarios.push({
        nombre: this.nombre,
        apellido: this.apellido,
        celular: this.celular,
        email: this.email,
      })
      //limpiando datos
   
      this.nombre = "",
      this.apellido = "",
      this.celular = "",
      this.email = ""
  
    }
    eliminarDatos(i){
      this.usuarios.splice(i, 1);

    }
  
    async editarDatos(i) {
     
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'EDITAR',
        inputs: [
          {
            name: 'name1',
            type: 'text',
            placeholder: 'NOMBRE',
            value: this.usuarios[i].nombre
          },
          {
            name: 'apellido1',
            type: 'text',
            placeholder: 'APELLIDO',
            value: this.usuarios[i].apellido
          },
          {
            name: 'celular1',
            type: 'text',
            placeholder: 'CELULAR',
            value: this.usuarios[i].celular
          },
          {
            name: 'email1',
            type: 'text',
            placeholder: 'EMAIL',
            value: this.usuarios[i].email
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          },
          {
            text: 'Editar', handler: data => {
           
              this.usuarios[i].nombre = data.nombre1;
              this.usuarios[i].apellido = data.apellido1;
              this.usuarios[i].celular = data.celular1;
              this.usuarios[i].email = data.email1;
          
            }
          }
        
        ]
      });

      await alert.present();
    }
  }
