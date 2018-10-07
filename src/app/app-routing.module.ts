import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'sidebar', pathMatch: 'full'},
      { path: 'sidebar', component: SidebarComponent },

    ])
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { };



