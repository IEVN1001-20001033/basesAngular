import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-zodiaco',
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent implements OnInit {
  formulario!: FormGroup;
  edad:number|string = "";
  nombre:string = "";
  signo:string = "";
  img:string = "";
  imageWidth: number=150;
  imageMargin: number=2;
  constructor(){}

    ngOnInit(): void {
      this.formulario = new FormGroup({
        nom: new FormControl('', Validators.required),
        a_Paterno: new FormControl('', Validators.required),
        a_Materno: new FormControl('', Validators.required),
        dia: new FormControl('', Validators.required),
        mes: new FormControl('', Validators.required),
        anio: new FormControl('', Validators.required)
      });
  }

  signos = [
    {
      signo: "Rata",
      imgUrl:"https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/RATA_PFC.svg"
    },
    {
      signo: "Buey",
      imgUrl:"https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-BUEY_PFC.svg"
    },
    {
      signo: "Tigre",
      imgUrl:"https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-TIGRE_PFC.svg"
    },{
      signo: "Conejo",
      imgUrl:"https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-CONEJO_PFC.svg"
    },{
      signo: "Dragón",
      imgUrl:"https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-DRAGON_PFC.svg"
    },{
      signo: "Serpiente",
      imgUrl:"https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/LA-SERPIENTE_PFC.svg"
    },{
      signo: "Caballo",
      imgUrl:"https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-CABALLO_PFC.svg"
    },{
      signo: "Cabra",
      imgUrl:"https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/LA-CABRA_PFC.svg"
    },{
      signo: "Mono",
      imgUrl:"https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-MONO_PFC.svg"
    },{
      signo: "Gallo",
      imgUrl:"https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-GALLO_PFC.svg"
    },{
      signo: "Perro",
      imgUrl:"https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-PERRO_PFC.svg"
    },
    {
      signo: "Cerdo",
      imgUrl:"https://pfchangsmexico.com.mx/wp-content/uploads/2023/01/EL-CERDO_PFC.svg"
    }
 ]

  Imprimir():void{
    const nom=this.formulario.get('nom')?.value;
    const a_Paterno=this.formulario.get('a_Paterno')?.value;
    const a_Materno=this.formulario.get('a_Materno')?.value;
    const dia=this.formulario.get('dia')?.value;
    const mes=this.formulario.get('mes')?.value;
    const anio=this.formulario.get('anio')?.value;
    const edadF = 2024 - anio;
    const edadF2 = edadF - 1;
    const oSigno = (anio - 1900) % 12;
    this.signo = "Tu signo zodiacal chino es: " + this.signos[oSigno].signo;
    this.img = this.signos[oSigno].imgUrl;

    this.nombre = "Hola " + nom + " " + a_Paterno +" " + a_Materno;
    this.edad = edadF;

    
    if (mes <= 10 && dia <= 8 ) {
      this.edad = "Tu edad es: " + edadF;
    }

    if (mes >= 10 && dia > 8) {
      this.edad = "Tu edad es: " + edadF2;
    }
    
  }
  
}
