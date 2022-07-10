
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() valorTipo : EventEmitter<string[]> = new EventEmitter();
  // @Output() valorCor : EventEmitter<string> = new EventEmitter();

  cor : string = "";
  tipo : string = "";

  constructor() { }

  ngOnInit(): void {
  }

 
  processa_pesquisa_tipo(pesquisa1 : string, pesquisa : string) {
    
    this.valorTipo.emit([pesquisa1, pesquisa]);
  }

  //  processa_pesquisa_cor(pesquisa : string){
    
  //    this.valorCor.emit(pesquisa)
  //  }


  onChange(event:any){  

    if(event.target.checked && event.target.value==="Casaco" || event.target.checked && event.target.value==="Camisa" ||event.target.checked && event.target.value==="Calças" ||event.target.checked && event.target.value==="T-Shirt" ||event.target.checked && event.target.value==="Sweatshirt" ){

      this.tipo=event.target.value;
   
     }else if(event.target.checked && event.target.value==="Preto" ||event.target.checked && event.target.value==="" ||event.target.checked && event.target.value==="Cinzento" ||event.target.checked && event.target.value==="Azul" ||event.target.checked && event.target.value==="Laranja"){

      this.cor=event.target.value
       
    }else if (event.target.checked && event.target.value==="1")
    {
      this.tipo= "";

    }else if (event.target.checked && event.target.value==="2")
    {
      this.cor = "";
    }else

    this.processa_pesquisa_tipo("","");

     this.processa_pesquisa_tipo(this.tipo, this.cor);

     console.log(this.tipo)
     console.log(this.cor)



  }

  // onChangeColor(event:any){
  //   if(event.target.checked){

  //     this.processa_pesquisa_cor(event.target.value);
  //   }else{
  //     this.processa_pesquisa_cor("");

  //   }

  // }
}
