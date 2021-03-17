import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css'],
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  monedas: string[] = ['USD', 'EUR', 'LIBRA', 'MX'];

  constructor() {}

  ngOnInit(): void {}

  vaciar() {
    this.cantidad = null;
  }

  convertir() {
    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.83;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.72;
        }
        if (this.quiero === 'MX') {
          this.total = this.cantidad * 20.39;
        }
        break;
      case 'EUR':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.2;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.86;
        }
        if (this.quiero === 'MX') {
          this.total = this.cantidad * 24.44;
        }
        break;
      case 'LIBRA':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 1.4;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 1.17;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad;
        }
        if (this.quiero === 'MX') {
          this.total = this.cantidad * 28.49;
        }
        break;
      case 'MX':
        if (this.quiero === 'USD') {
          this.total = this.cantidad * 0.049;
        }
        if (this.quiero === 'EUR') {
          this.total = this.cantidad * 0.041;
        }
        if (this.quiero === 'LIBRA') {
          this.total = this.cantidad * 0.035;
        }
        if (this.quiero === 'MX') {
          this.total = this.cantidad;
        }
        break;

      default:
        break;
    }
  }
}
