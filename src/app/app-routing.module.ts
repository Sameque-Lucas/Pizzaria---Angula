import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { ProductsComponent } from './products/products.component';
import { AddPizzasComponent } from './add-pizzas/add-pizzas.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {canActivate, redirectUnauthorizedTo} from '@angular/fire/auth-guard';
import { ProductViewComponent } from './product-view/product-view.component';
import { ChefViewComponent } from './chef-view/chef-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: "/Products" },
  //{path:"Products", component:ProductsComponent, ...canActivate(()=> redirectUnauthorizedTo(['/Login']))},
  {path:"Products", component:ProductsComponent},
  {path:"OrderSummary", component:OrderSummaryComponent},
  {path:"Admin", component:AdminViewComponent},
  {path:"Register", component:RegisterComponent},
  {path:"Login", component:LoginComponent},
  {path:"ChefView", component:ChefViewComponent},
  {path: "ProductDetail/:id", component:ProductViewComponent},
  {path:"ChefView", component:ChefViewComponent},
  {path: "Home-View", component:HomeViewComponent},
  {path: "Quem-somos", component:WhoWeAreComponent},
  {path: "Contato", component:ContactoComponent},
  {path: "Equipe", component: EquipoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

