import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'innofied';
  hex_colors = [
    '#FF5733',
    '#6A5ACD',
    '#00FF00',
    '#FFD700',
    '#8B4513',
    '#FF1493',
  ];

  ngOnInit(): void {
    const color = '';
    this.setCSSVariables(color);
  }

  setCSSVariables(colors: any) {
    const root = document.documentElement;
    root.style.setProperty(
      '--form-background-color',
      colors.formBackgroundColor || this.hex_colors[1]
    );
    root.style.setProperty(
      '--label-color',
      colors.labelColor || this.hex_colors[2]
    );
    root.style.setProperty(
      '--button-color',
      colors.buttonColor || this.hex_colors[3]
    );
  }
}
