import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FamiliaComponent } from './familia/familia.component';
import { HomeComponent } from './home/home.component';
import { JogoComponent } from './jogo/jogo.component';
import { LocalComponent } from './local/local.component';
import { PostFamiliaComponent } from './post-familia/post-familia.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'local', component: LocalComponent},
  {path:'familia', component: FamiliaComponent},
  {path: 'cadastroFamilia', component: PostFamiliaComponent},
  {path: 'jogo', component: JogoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
