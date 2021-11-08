import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UpdateService } from 'src/app/service/update.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  head:string = "Update notice"

  updateForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    descriptions: new FormControl(''),
  }); 

  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder,
    private _service:UpdateService) { }

    onSubmit(){
    
    console.warn(this.updateForm.value);
    this._service.update(this.updateForm.value.id,this.updateForm.value).subscribe(response => console.log(response))
  }
}