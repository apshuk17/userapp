import { browser, element, by } from 'protractor';

export class UserAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ua-root h1')).getText();
  }
}
