import { Routes } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { FilasComponent } from './navegacao/filas/filas.component';
import { GuichesComponent } from './navegacao/guiches/guiches.component';
import { FilaDetalheComponent } from './navegacao/filas/fila-detalhe/fila-detalhe.component';
import { GuicheDetalheComponent } from './navegacao/guiches/guiche-detalhe/guiche-detalhe.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'filas', component: FilasComponent },
    { path: 'guiches', component: GuichesComponent },
    { path: 'fila-detalhe', component: FilaDetalheComponent },
    { path: 'guiche-detalhe', component: GuicheDetalheComponent }
];