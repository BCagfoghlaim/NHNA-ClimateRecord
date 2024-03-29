import { ComparisonpageComponent } from './comparisonpage/comparisonpage.component';
import { PartyPageComponent } from './party-page/party-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdDetailsComponent as TdDetailsComponent } from './td-details/td-details.component';
import { TdsListComponent as TdsListComponent } from './tds-list/tds-list.component';

const routes: Routes = [
  { path: 'All-TDs', component: TdsListComponent },
  { path: 'tds/:name', component: TdDetailsComponent },
  { path: 'app-party-page', component: PartyPageComponent },
  { path: 'app-comparisonpage', component: ComparisonpageComponent },
  { path: '', redirectTo: '/All-TDs', pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
