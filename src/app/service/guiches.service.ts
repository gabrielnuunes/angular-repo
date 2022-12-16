import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Guiches } from "./guiches";


@Injectable()
export class GuichesService {

    constructor(private http: HttpClient){

    }

    protected url: string = 'http://localhost:4200/api';

    headers = { 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiIzN0E2MjU5Q0MwQzFEQUUyOTlBNzg2NjQ4OURGRjBCRCIsImlhdCI6MTY3MTE1NTI5MCwic3ViIjoidXNlcnMvMTIzNDU2IiwiaXNzIjoibG9jYWxob3N0OjgwODAvc2V0b3Jlcy92MS8iLCJleHAiOjE2NzExNTUyOTB9.yDvyR-ng7kCl1uiKQfGObugNK_dWI1Y7KU_PcEDr3l7rUzLd7shG4osgVmM2z0pSDeKqNVzRFOSoy8ka7zfFpw' };


    obterGuiches(): Observable<Guiches[]>{
        var guiches = this.http.get<Guiches[]>(this.url + "/guiches", { headers: this.headers });

        return guiches;

    }

}