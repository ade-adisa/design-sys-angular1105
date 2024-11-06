import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
    standalone: true,
    imports: [RouterOutlet],
    selector: 'app-wrapper-component',
    templateUrl: './wrapper.component.html',
    styleUrls: ['./wrapper.component.css']
})

export class WrapperComponent implements OnInit {
    currentTheme: 'light-theme' | 'dark-theme' = 'light-theme';

    constructor(private renderer: Renderer2) {}

    ngOnInit() {
      this.setTheme(this.currentTheme);
    }

    toggleTheme() {
      this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
      this.setTheme(this.currentTheme);
    }

    private setTheme(theme: string) {
      this.renderer.setAttribute(document.body, 'class', theme);
    }

    handleLogin(formData: { email: string; password: string }) {
      console.log('Form submitted:', formData);
      // Add addition logic to handle login.
    }
}