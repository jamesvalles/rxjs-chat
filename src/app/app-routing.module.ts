import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ChatPageComponent} from '../app/chat-page/chat-page.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from '../app/auth.guard';


const routes: Routes =[ 
  {path:'chat', component: ChatPageComponent, canActivate:[AuthGuard]}, 
  {path:'login', component:LoginComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];


@NgModule({
  imports:[RouterModule.forRoot(routes, {useHash: true})],
  exports:[RouterModule]
})
export class AppRoutingModule { 
}
export const routingComponents = [ChatPageComponent, LoginComponent]