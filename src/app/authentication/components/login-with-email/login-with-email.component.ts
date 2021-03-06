import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BackendService} from "../../../root-browser/services/backend.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SessionService} from "../../../root-browser/services/session.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-with-email',
  templateUrl: './login-with-email.component.html',
  styleUrls: ['./login-with-email.component.scss']
})
export class LoginWithEmailComponent implements OnInit {

  loginForm = new FormGroup({
    Email: new FormControl('', [
      Validators.email, Validators.required
    ]),
    Password: new FormControl('', [
     Validators.required, Validators.minLength(8)
    ])
  })

  constructor(private backendService: BackendService,
              private snackbar: MatSnackBar,
              private sessionService: SessionService,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  showToast(message: string) {
    this.snackbar.open(message, null, {
      duration: 3000
    });
  }

  onLoginFormSubmit() {
    if(this.loginForm.valid) {
      let payload = this.loginForm.getRawValue();
      this.backendService.login(payload).subscribe((response: any) => {
        this.showToast(response.message);
        if(response && response.token) {
          this.sessionService.setToken(response.token);
          this.router.navigate(['/blog']);
        }
      }, (error: any) => {
        let errorMessage = error.error.message;
        this.showToast(errorMessage);
      })
    }
  }

}
