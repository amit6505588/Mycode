import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FestivalComponent } from './festival/festival.component';
import { FestivalFixHeaderComponent } from './festival-fix-header/festival-fix-header.component';



@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'festival', pathMatch: 'full' },
      {
        path: 'festival',
        children: [
          { path: '', redirectTo: 'table', pathMatch: 'full' },
          { path: 'table', component: FestivalComponent },
          { path: 'fixedHeader', component: FestivalFixHeaderComponent },
        ]
      },

    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { };



