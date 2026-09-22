import { Component,Output, EventEmitter,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-activities',
  styleUrl: './activities.css',
  templateUrl: './activities.html',
})

export class Activities implements OnInit {
  newActivity = '';
  completedCount = 0;

  activities = [
  {
    title: 'Study Angular',
    completed: false
  },
  {
    title: 'Go skating',
    completed: false
  },
  {
    title: 'Study English',
    completed: false
  }
];

addActivity() {
  if (!this.newActivity.trim()) {
    alert('Write an activity first!');
    return;
  }

  this.activities.push({
    title: this.newActivity,
    completed: false
  });

  this.newActivity = '';

  this.onTotalChange();
}

deleteActivity() {
  const completedActivities = this.activities.filter(activity => activity.completed);

  this.completedCount += completedActivities.length;

  this.activities = this.activities.filter(activity => !activity.completed);

  this.onTotalChange();
}

getcompletedActivities() {
  return this.activities.filter(activity => activity.completed).length;
  }

  resetCount() {
    this.completedCount = 0;
  }

  @Output() completedChange = new EventEmitter<number>();
  @Output() totalChange = new EventEmitter<number>();

  getCompletedCount() {
    return this.activities.filter(activity => activity.completed).length;
  }

  onActivityChange() {
    this.completedChange.emit(this.getCompletedCount());
  }

  onTotalChange() {
    this.totalChange.emit(this.activities.length);
  }

  ngOnInit() {
  this.onTotalChange();
}
}
