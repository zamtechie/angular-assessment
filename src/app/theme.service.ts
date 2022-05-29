import { Injectable } from '@angular/core';
import { AppConstants } from './app.constants';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  setAppTheme() {

    let defaultTheme = localStorage.getItem('theme');
    if(defaultTheme === null) {
      localStorage.setItem('theme', AppConstants.THEMES.LIGHT);
      this.setTheme(AppConstants.THEMES.LIGHT);
    } else if (defaultTheme === AppConstants.THEMES.LIGHT){
      this.setTheme(AppConstants.THEMES.LIGHT);
    } else {
      this.setTheme(AppConstants.THEMES.DARK);
    }

  }

  changeAppTheme(): void {
    let savedTheme = localStorage.getItem('theme');
    if(savedTheme === AppConstants.THEMES.LIGHT){
      localStorage.setItem('theme', AppConstants.THEMES.DARK);
      this.setTheme(AppConstants.THEMES.DARK);
    } else {
      localStorage.setItem('theme', AppConstants.THEMES.LIGHT);
      this.setTheme(AppConstants.THEMES.LIGHT);
    }
  }

  setTheme(theme: string): void {
    document.body.className = "";
    document.body.classList.add(theme);
  }
}
