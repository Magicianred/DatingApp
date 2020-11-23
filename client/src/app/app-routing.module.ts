import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MembersDetailComponent } from './members/members-detail/members-detail.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthGuard } from './guards/auth.guard';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  {
    path:'',
    runGuardsAndResolvers:'always',
    canActivate:[AuthGuard],
    children:[
      { path:'members', component: MembersListComponent, canActivate:[AuthGuard]},
      { path:'members/:username', component: MembersDetailComponent,  canActivate:[AuthGuard]},
      { path:'lists', component: ListsComponent,  canActivate:[AuthGuard]},
      { path:'messages', component:MessagesComponent,  canActivate:[AuthGuard]},
    ]
  },
  { path:'errors', component:TestErrorsComponent },
  { path:'not-found', component:NotFoundComponent},
  { path:'server-error', component:ServerErrorComponent},
  { path:'**', component: NotFoundComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
