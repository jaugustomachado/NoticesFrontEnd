import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Notice } from 'src/app/model/notice.model';
import { UpdatePartiallyService } from 'src/app/service/update-partially.service';

@Component({
  selector: 'app-update-partially',
  templateUrl: './update-partially.component.html',
  styleUrls: ['./update-partially.component.scss']
})
export class UpdatePartiallyComponent implements OnInit {


  head:string = "Details"
  updatePartially: Notice[]=[];

  updatePartiallyForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    descriptions: new FormControl(''),
    publication_date: new FormControl(''),
    viewing_date: new FormControl(''),
  })

  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder,
    private _service:UpdatePartiallyService) { }

  onSubmit(){

    console.warn(this.updatePartiallyForm.value);
    this._service.updatePartially(this.updatePartiallyForm.value.id,
      this.updatePartiallyForm.value)
      .subscribe((notices:Notice) => this.updatePartially=[notices])
  }
}