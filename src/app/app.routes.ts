import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { Menu } from './menu/menu';
import { Redes } from './redes/redes';
import { Carrito } from './carrito/carrito';
export const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'menu', component: Menu },
    {path : 'redes', component : Redes},
    {path : 'carrito', component: Carrito}
];

