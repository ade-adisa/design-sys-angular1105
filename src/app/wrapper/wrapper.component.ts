import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';


@Component({
    standalone: true,
    imports: [RouterOutlet, LoginFormComponent],
    selector: 'app-wrapper-component',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
    currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';

    constructor(private renderer: Renderer2) {}

    ngOnInit() {
      this.setTheme(this.currentTheme); // Set initial theme
    }

    // Function to toggle between light and dark themes
    toggleTheme() {
      this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
      this.setTheme(this.currentTheme);
    }

    private setTheme(theme: string) {
      this.renderer.setAttribute(document.body, 'class', theme);
    }
}