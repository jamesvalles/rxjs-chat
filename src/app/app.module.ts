import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { UsersService } from './user/users.service';
import { ThreadsService } from './thread/threads.service';
import { MessagesService } from './message/messages.service';

import { AppComponent } from './app.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { FromNowPipe } from './pipes/from-now.pipe';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthGuard } from './auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    ChatMessageComponent,
    ChatThreadComponent,
    ChatNavBarComponent,
    ChatThreadsComponent,
    ChatWindowComponent,
    FromNowPipe,
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule 
  ],
  providers: [
    MessagesService, ThreadsService, UsersService, AuthGuard
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
