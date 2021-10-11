import { Component, OnInit } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.sass']
})
export class FeatureComponent implements OnInit {

  public companies: MenuItem[] = [
    { url: '/home', nombre: 'home' },
    { url: '/producto', nombre: 'citas' },
    { url: '/medicos', nombre: 'medicos' }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
