import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Notice } from 'src/app/model/notice.model';
import { SearchService } from 'src/app/service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  head:string = "Search notice"
  
  search:Notice[]=[];

  searchForm = new FormGroup({
    title: new FormControl('')
  })
  
  ngOnInit(): void {

  }

  constructor(private formBuilder: FormBuilder,
    private _service:SearchService) { }

    onSubmit(){
  
      console.warn(this.searchForm.value.title);
      this._service.search(this.searchForm.value.title).subscribe((notices:Notice[]) => this.search=notices)

    }
}


