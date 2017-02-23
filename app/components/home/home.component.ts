import { Component } from '@angular/core';
import { Auth } from '../../auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'home-app',
  templateUrl: 'home.template.html',
})
export class HomeComponent  {
  constructor(private auth: Auth) {}
}
