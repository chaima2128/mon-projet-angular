import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Apartment } from '../../core/models/Apartment';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent {
  residenceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.residenceForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', [Validators.required, Validators.pattern('https?://.+')]],
      status: ['Disponible', Validators.required],
      apartments: this.fb.array([])
    });
  }

  get apartments(): FormArray {
    return this.residenceForm.get('apartments') as FormArray;
  }

  addApartment() {
    this.apartments.push(this.fb.group({
      apartNum: ['', Validators.required],
      floorNum: ['', Validators.required],
      surface: ['', Validators.required],
      category: ['', Validators.required]
    }));
  }

  removeApartment(index: number) {
    this.apartments.removeAt(index);
  }

  onSubmit() {
    if (this.residenceForm.valid) {
      console.log("Nouvelle résidence :", this.residenceForm.value);
    }
  }
}
