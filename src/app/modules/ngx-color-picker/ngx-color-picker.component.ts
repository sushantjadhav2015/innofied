import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngx-color-picker',
  templateUrl: './ngx-color-picker.component.html',
  styleUrls: ['./ngx-color-picker.component.css'],
})
export class NgxColorPickerComponent implements OnInit {
  color: string = '#ffffff';
  ngOnInit(): void {}
}
