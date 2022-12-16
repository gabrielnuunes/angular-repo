import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Filas } from "./filas";
import { Observable } from "rxjs";

@Injectable()
export class FilasService {
    
    constructor(private http: HttpClient) { }
    
    protected url: string = "http://localhost:4200/api";
        


    obterFilas(): Observable<Filas[]>{
        var filas = this.http.get<Filas[]>(this.url + "/filas");

        return filas;

    }   

    }
    
    // obterFilasPorId(id: string): Observable<Filas>{
    //     var fila = this.http.get<Filas>(this.url + "/filas/" + id);
    //     return fila;
    // }

    // emitirSenha(): Observable<Filas>{
    //     var senha = this.http.put<Filas>(this.url + "/filas/", this.bodyEmitir);
    //     return senha;
    // } 


    // bodyEmitir = {
    //     "numero": 1,
    //     "nome": "Vendas",
    //     "prefixo": {
    //         "name": "V"
    //     },
    //     "senhaInicial": 1,
    //     "senhaFinal": 99,
    //     "painel": 31,
    //     "nomeDisplay": "",
    //     "encaminhamento": false,
    //     "botao": 1,
    //     "tempoEspera": "0min",
    //     "ultimaChamada": "0",
    //     "ultimaEmitida": "0",
    //     "espera": 0
    // }



   

