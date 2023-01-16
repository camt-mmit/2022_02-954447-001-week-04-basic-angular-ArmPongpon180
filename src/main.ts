import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HelloWorldComponent } from './app/hello-world/hello-world.component';
import { ProfileComponentComponent } from './app/profile-component/profile-component.component';
import { FriendComponentComponent } from './app/friend-component/friend-component.component';
import {StatusComponentComponent} from './app/status-component/status-component.component'
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {path : '', redirectTo : 'hello-world', pathMatch: 'full'},
      { path: 'hello-world', component: HelloWorldComponent },
      { path: 'profile', component: ProfileComponentComponent },
      { path: 'friend', component: FriendComponentComponent },
      { path: 'status', component: StatusComponentComponent},
    ]),
  ],
}).catch((err) => console.error(err));
