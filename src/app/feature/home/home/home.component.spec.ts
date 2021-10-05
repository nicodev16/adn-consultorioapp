import { waitForAsync, TestBed } from '@angular/core/testing';
import { HomeService } from '@home/shared/service/home.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {



  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [HomeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {

  });

});
