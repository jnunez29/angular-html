import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from 'src/app/interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;
  producto_id: string;

  constructor(private route: ActivatedRoute,
    public productosService: ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe(parametros => {
        this.productosService.getProducto(parametros['id'])
          .subscribe((producto: ProductoDescripcion) => {
            this.producto_id = parametros['id'];
            this.producto = producto;
          })
      });
  }

}
