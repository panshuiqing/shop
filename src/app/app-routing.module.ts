import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, LoginModule } from './login';
import { HomeComponent, HomeModule, HomeRoutes } from './home';
import { PageNotFoundComponent } from './404.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, children: HomeRoutes
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [LoginModule, HomeModule, RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule],
  declarations: [PageNotFoundComponent]
})
export class AppRoutingModule {

}