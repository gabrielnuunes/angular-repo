import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';

import { FilasComponent } from './navegacao/filas/filas.component';
import { GuichesComponent } from './navegacao/guiches/guiches.component';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';
import { FilasService } from './service/filas.service';
import { GuichesService } from './service/guiches.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilaDetalheComponent } from './navegacao/filas/fila-detalhe/fila-detalhe.component';
import { GuicheDetalheComponent } from './navegacao/guiches/guiche-detalhe/guiche-detalhe.component';
import { AuthService } from './service/seguranca/auth.service';
import { InterceptorService } from './service/seguranca/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FilasComponent,
    GuichesComponent,
    FilaDetalheComponent,
    GuicheDetalheComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})]
    
  ],
  providers: [
    FilasService,
    GuichesService,
    AuthService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
