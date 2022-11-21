import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cubos/marca/:marca', component: HomeComponent },
  { path: 'valoracion/:id', component: DetallescuboComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'usuario', component: UsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
