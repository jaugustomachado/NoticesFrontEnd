import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DeleteService } from 'src/app/service/delete.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  head:string = "Delete a notice"

  deleteForm = new FormGroup({
    id: new FormControl('')
  });

  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder,
    private _service:DeleteService) { }
 
    onSubmit(){
    console.warn(this.deleteForm.value.id);
    this._service.delete(this.deleteForm.value.id).subscribe(response => console.log(response))
  }
}