import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Ella Nicole Rivera';
  location = 'San Fernando, Pampanga';
  email = 'riveraent05@proton.me';
  phone = '09XX XXX XXXX';

  profile = 'I am a 3rd year Web Development student at Holy Angel University. Currently taking the Advanced Dynamic Web Applications Course to learn about Web Frameworks and other tools for front-end web development.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'Node',
    'Angular',
    'QA Testing',
    'MongoDB',
    'Vue',
    'Express'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
