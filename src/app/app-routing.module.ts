import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SaveComponent } from './save/save.component';


const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'saved', component: SaveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
