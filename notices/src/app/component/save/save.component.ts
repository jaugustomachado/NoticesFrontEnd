import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { SaveService } from 'src/app/service/save.service';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.scss']
})
export class SaveComponent implements OnInit {

  head:string = "Save a notice"
  
  saveForm = new FormGroup({
    title: new FormControl(''),
    descriptions: new FormControl(''),
  });

  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder,
    private _service:SaveService) { }
 
    onSubmit(){
    
    console.warn(this.saveForm.value);
    this._service.save(this.saveForm.value).subscribe(response => console.log(response))
  }

}
