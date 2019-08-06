import { Component, OnInit } from '@angular/core';
/*Sirve para crear parametros de entrada*/ 
import { Input } from '@angular/core';
/*Sirve valores, eventos de salida*/
import { Output, EventEmitter } from '@angular/core'; 
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}