import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';
import { Header } from './header/header';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard, Header, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Ella Nicole Rivera';
  location = 'San Fernando, Pampanga';
  email = 'riveraent05@proton.me';
  phone = '0942 017 1592';

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

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
