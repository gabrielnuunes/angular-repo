import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Filas } from 'src/app/service/filas';
import { FilasService } from 'src/app/service/filas.service';

@Component({
  selector: 'app-filas',
  templateUrl: './filas.component.html',
  styles: [
  ]
})
export class FilasComponent implements OnInit {
  
  constructor(private filasService: FilasService ) {}
  
  public filas: Filas[] = [];

  ngOnInit() {
    this.filasService.obterFilas()
      .subscribe(
        filas => {
          this.filas = filas;
          console.log(filas);
        },
        error => console.log(error)
      );
  }

}


