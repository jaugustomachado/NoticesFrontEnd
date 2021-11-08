import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteComponent } from './component/delete/delete.component';
import { ListComponent } from './component/list/list.component';
import { SaveComponent } from './component/save/save.component';
import { SearchComponent } from './component/search/search.component';
import { UpdatePartiallyComponent } from './component/update-partially/update-partially.component';
import { UpdateComponent } from './component/update/update.component';

const routes: Routes = [
  {path: "List",component:ListComponent},
  {path: "Save",component:SaveComponent},
  {path: "Search",component:SearchComponent},
  {path: "Delete",component:DeleteComponent},
  {path: "Update",component:UpdateComponent},
  {path: "Update-Partially",component:UpdatePartiallyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
