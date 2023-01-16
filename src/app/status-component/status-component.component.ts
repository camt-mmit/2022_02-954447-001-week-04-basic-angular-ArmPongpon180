import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-component.component.html',
  styleUrls: ['./status-component.component.scss']
})
export class StatusComponentComponent {
  date = new Date()
  agent = navigator.userAgent;
  lang = navigator.languages;
  cookie = navigator.cookieEnabled;
  logic = navigator.hardwareConcurrency;
  points = navigator.maxTouchPoints;
}
