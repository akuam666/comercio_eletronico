
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Output() valorPesquisa : EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  processa_pesquisa(pesquisa : string) {
    // "pesquisa" é o payload
    this.valorPesquisa.emit(pesquisa);
  }

}
