import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Apartment } from '../../core/models/Apartment';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent {
  apartForm: FormGroup;
  newApart!: Apartment;

  constructor() {
    this.apartForm = new FormGroup({
      apartNum: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      floorNum: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      surface: new FormControl('', Validators.required),
      terrace: new FormControl(false),
      surfaceterrace: new FormControl({ value: '', disabled: true }),
      category: new FormControl('', Validators.required),
      ResidenceId: new FormControl('', Validators.required)
    });

    // Désactiver Surface Terrace si Terrace n'est pas coché
    this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
      if (value) {
        this.apartForm.get('surfaceterrace')?.enable();
      } else {
        this.apartForm.get('surfaceterrace')?.disable();
      }
    });
  }

  onSubmit() {
    if (this.apartForm.valid) {
      this.newApart = this.apartForm.value;
      console.log("Nouvel appartement ajouté :", this.newApart);
    }
  }
}
