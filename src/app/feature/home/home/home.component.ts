import { Component, OnInit } from '@angular/core';
import { Cita } from '@home/shared/models/cita';
import { HomeService } from '@home/shared/service/home.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  public listaCitas: Observable<Cita[]>
  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.listaCitas = this.homeService.getCitas()
  }


}
