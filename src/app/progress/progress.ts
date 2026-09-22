import { Component,Input} from '@angular/core';

@Component({
  imports: [],
  selector: 'app-progress',
  styleUrl: './progress.css',
  templateUrl: './progress.html',
})
export class Progress {
  @Input() completedCount= 0;
  @Input() totalActivities = 0;

  get progressPercentage() {
  if (this.totalActivities === 0) {
    return 0;
  }

  return (this.completedCount / this.totalActivities) * 100;
}
}
