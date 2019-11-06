import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ChatPageComponent} from '../app/chat-page/chat-page.component';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from '../app/auth.guard';


const routes: Routes =[ 
  {path:'chat', component: ChatPageComponent, canActivate:[AuthGuard]}, 
  {path:'', component:LoginComponent}
];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ChatPageComponent, LoginComponent]