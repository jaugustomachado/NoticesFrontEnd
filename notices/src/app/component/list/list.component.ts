import { Component, OnInit } from '@angular/core';
import { Notice } from 'src/app/model/notice.model';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  head:string = "List of notices"
  list:Notice[]=[];

  constructor(private _service:ListService,) { }

  ngOnInit(): void {
    this. _service.list().subscribe((notices:Notice[]) => this.list=notices)
  }

}
