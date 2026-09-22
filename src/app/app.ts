import { Component } from '@angular/core';
import { Header } from './header/header';
import { Activities } from './activities/activities';
import { Progress } from './progress/progress';


@Component({
  selector: 'app-root',
  imports: [Header, Activities,Progress],
  styleUrl: './app.css',
  templateUrl: './app.html',
})

export class App {
    completedCount = 0;
    totalActivities = 0;
}
