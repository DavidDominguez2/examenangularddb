import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioService } from './services/usuario.service';
import { AuthService } from './services/auth.service';
import { CuboService } from './services/cubo.service';
import { MenuComponent } from './components/menu/menu.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, DetallescuboComponent, LoginComponent, RegisterComponent, UsuarioComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [UsuarioService, AuthService, CuboService],
  bootstrap: [AppComponent],
})
export class AppModule {}
