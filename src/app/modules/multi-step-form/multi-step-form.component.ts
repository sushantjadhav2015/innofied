import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.css'],
})
export class MultiStepFormComponent {
  searchTaxiForm!: FormGroup;
  showAirportFields: boolean = true;

  constructor(private formBuilder: FormBuilder, private router:Router) {}

  ngOnInit() {
    this.searchTaxiForm = this.formBuilder.group({
      selection: ['Airport Transfer', Validators.required],
      select_pickupLocation: ['', Validators.required],
      select_dropLocation: ['', Validators.required],
      to_station: ['', Validators.required],
      from_station: ['', Validators.required],
      from_date: ['', Validators.required],
      from_time: ['', Validators.required],
      arriveFrom: ['', Validators.required],
      flightNo: ['', Validators.required],
      datetime: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      noOfBaggage: ['0', Validators.required],
      adult: ['1', Validators.required],
      children: ['0', Validators.required],
      infants: ['0', Validators.required],
    });

    // Load form data from LocalStorage (if available)
    const formData = JSON.parse(localStorage.getItem('searchTaxiFormData') || '{}');
    this.searchTaxiForm.patchValue(formData);

    this.searchTaxiForm.get('selection')?.valueChanges.subscribe((value) => {
      if (value === 'Direct Transfer') {
        this.showAirportFields = false;
        this.searchTaxiForm.get('arriveFrom')?.clearValidators();
        this.searchTaxiForm.get('flightNo')?.clearValidators();
        this.searchTaxiForm.get('datetime')?.clearValidators();
        this.searchTaxiForm.get('arrivalDate')?.clearValidators();
        this.searchTaxiForm.get('arrivalTime')?.clearValidators();
        this.searchTaxiForm.get('to_station')?.clearValidators();
        this.searchTaxiForm.get('from_station')?.clearValidators();
        this.searchTaxiForm.get('select_pickupLocation')?.setValidators([Validators.required]);
        this.searchTaxiForm.get('select_dropLocation')?.setValidators([Validators.required]);
      } else {
        this.showAirportFields = true;
        this.searchTaxiForm
          .get('arriveFrom')
          ?.setValidators([Validators.required]);
        this.searchTaxiForm
          .get('flightNo')
          ?.setValidators([Validators.required]);
        this.searchTaxiForm
          .get('datetime')
          ?.setValidators([Validators.required]);
        this.searchTaxiForm
          .get('arrivalDate')
          ?.setValidators([Validators.required]);
        this.searchTaxiForm
          .get('arrivalTime')
          ?.setValidators([Validators.required]);
        this.searchTaxiForm
          .get('to_station')
          ?.setValidators([Validators.required]);
        this.searchTaxiForm
          .get('from_station')
          ?.setValidators([Validators.required]);
        this.searchTaxiForm.get('select_pickupLocation')?.clearValidators();
        this.searchTaxiForm.get('select_dropLocation')?.clearValidators();
      }

      this.searchTaxiForm.get('arriveFrom')?.updateValueAndValidity();
      this.searchTaxiForm.get('flightNo')?.updateValueAndValidity();
      this.searchTaxiForm.get('datetime')?.updateValueAndValidity();
      this.searchTaxiForm.get('arrivalDate')?.updateValueAndValidity();
      this.searchTaxiForm.get('arrivalTime')?.updateValueAndValidity();
      this.searchTaxiForm.get('to_station')?.updateValueAndValidity();
      this.searchTaxiForm.get('from_station')?.updateValueAndValidity();
      this.searchTaxiForm
        .get('select_pickupLocation')
        ?.updateValueAndValidity();
      this.searchTaxiForm.get('select_dropLocation')?.updateValueAndValidity();
    });

    this.searchTaxiForm.updateValueAndValidity();
  }

  onSubmit() {
    console.log('Form Values:', this.searchTaxiForm.value);
    localStorage.setItem('searchTaxiFormData', JSON.stringify(this.searchTaxiForm.value));
    this.router.navigate(['/home'])
  }

  onRadioSelect() {
    if (this.showAirportFields) {
      this.searchTaxiForm.get('to_station')?.reset();
      this.searchTaxiForm.get('from_station')?.reset();
      this.searchTaxiForm.get('from_date')?.reset();
      this.searchTaxiForm.get('from_time')?.reset();
      this.searchTaxiForm.get('arriveFrom')?.reset();
      this.searchTaxiForm.get('flightNo')?.reset();
      this.searchTaxiForm.get('datetime')?.reset();
      this.searchTaxiForm.get('arrivalDate')?.reset();
      this.searchTaxiForm.get('arrivalTime')?.reset();
      this.searchTaxiForm.get('adult')?.reset();
      this.searchTaxiForm.get('children')?.reset();
      this.searchTaxiForm.get('infants')?.reset();
    } else {
      this.searchTaxiForm.get('select_pickupLocation')?.reset();
      this.searchTaxiForm.get('select_dropLocation')?.reset();
      this.searchTaxiForm.get('adult')?.reset();
      this.searchTaxiForm.get('children')?.reset();
      this.searchTaxiForm.get('infants')?.reset();
    }
  }
}
