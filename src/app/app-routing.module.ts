import { LandingComponent } from './landing/landing.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NeroComponent } from './nero/nero.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



const routes: Routes = [
  {path: 'about', component: AboutComponent},
  //this is the defAULT PAGE IT  WILL ROUTE TO
  {path: '', component: LandingComponent},
  {path: 'landing', component: LandingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'nero', component:NeroComponent},
  {path: 'purchase', component:PurchaseComponent},
  {path: 'marketplace', component:MarketplaceComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
