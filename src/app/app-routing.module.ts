import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cubos/marca/:marca', component: HomeComponent },
  { path: 'valoracion/:id', component: DetallescuboComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
