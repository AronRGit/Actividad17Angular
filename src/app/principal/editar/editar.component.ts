import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  producto:any;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.producto = JSON.parse(params['producto']);

      });
    }

 }

 

