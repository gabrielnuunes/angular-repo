import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = localStorage.getItem('token') || '';

        if (req.headers.has('Authorization')) {

            const requisicaoModificada = req.clone({
                setHeaders: { 'Authorization': token }
            })
            return next.handle(requisicaoModificada);
        }

        return next.handle(req);
    }

}