import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MenuItem } from '@core/modelo/menu-item';
import { LoginService } from '@core/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`:host {
    border: 0 solid #e1e1e1;
    border-bottom-width: 1px;
    display: block;
    height: 48px;
    padding: 0 16px;
  }

  nav a {
    color: #8f8f8f;
    font-size: 14px;
    font-weight: 500;
    line-height: 48px;
    margin-right: 20px;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
  }


  nav a.router-link-active {
    color: #106cc8;
  }`],
})
export class NavbarComponent implements OnInit {

  @Input()
  items: MenuItem[];
  isLogged = false;

  constructor(protected loginService: LoginService) { }

  ngOnInit() {
    this.isLogged = this.loginService.getLogged();
  }

  logout() {
    this.loginService.logout();
  }

}
