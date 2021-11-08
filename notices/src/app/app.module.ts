import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './component/list/list.component';
import { SearchComponent } from './component/search/search.component';
import { SaveComponent } from './component/save/save.component';
import { DeleteComponent } from './component/delete/delete.component';
import { UpdateComponent } from './component/update/update.component';
import { UpdatePartiallyComponent } from './component/update-partially/update-partially.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListService } from './service/list.service';
import { SaveService } from './service/save.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SearchComponent,
    SaveComponent,
    DeleteComponent,
    UpdateComponent,
    UpdatePartiallyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClient,
    ListService,
    SaveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
