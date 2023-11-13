import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { NeroComponent } from './nero/nero.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    NeroComponent,
    PurchaseComponent,
    MarketplaceComponent,
    RegisterComponent,
    LoginComponent,

  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,RouterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
