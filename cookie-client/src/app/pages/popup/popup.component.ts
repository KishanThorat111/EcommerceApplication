import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  isVisible = false;

  constructor() {
    this.checkThirdPartyCookies();
  }

  checkThirdPartyCookies() {
    // This is a simple check; you may want to implement a more robust solution
    const cookieEnabled = navigator.cookieEnabled;

    // If cookies are not enabled, show the popup
    if (!cookieEnabled) {
      this.isVisible = true;
    }
  }

  close() {
    this.isVisible = false;
  }
}
