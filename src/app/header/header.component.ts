import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = "Angular Assessment";
  constructor(private themeObj: ThemeService) { }

  ngOnInit(): void {
  }

  changeTheme(): void {
    this.themeObj.changeAppTheme();
  }
}
