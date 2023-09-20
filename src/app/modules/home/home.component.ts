import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  selectedColor: string = '#ff0000'; // Default color

  constructor() {}

  updateColorPreview(event: any) {
    this.selectedColor = event.target.value;
    console.log('Selected color:', this.selectedColor);
    // You can perform additional actions here with the selected color
  }

}
