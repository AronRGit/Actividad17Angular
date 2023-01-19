import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  producto:any;
  productos = [
    { id: 1, codigo: 'P001', descripcion: 'Galletas de chokis', precioCompra: 10.00, precioVenta: 15.00, ganancia: 5, existencia: 100 },
    { id: 2, codigo: 'P002', descripcion: 'Mermelada de fresa', precioCompra: 65.00, precioVenta: 80.00, ganancia: 15, existencia: 100 },
    { id: 3, codigo: 'P003', descripcion: 'Aceite', precioCompra: 18.00, precioVenta: 20.00, ganancia: 2, existencia: 100 },
    { id: 4, codigo: 'P004', descripcion: 'Palomitas de maiz', precioCompra: 12.00, precioVenta: 15.00, ganancia: 3, existencia: 100 },
    { id: 5, codigo: 'P005', descripcion: 'Doritos', precioCompra: 5.00, precioVenta: 8.00, ganancia: 3, existencia: 100 }
  ];

  constructor(private router: Router) { }
  
editarProducto(id: number) {
  this.producto = this.productos.find(p => p.id == id);
  this.router.navigate(['/productos',JSON.stringify(this.producto)]);
}

  ngOnInit(): void {
  }

}
