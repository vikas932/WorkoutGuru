import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

@Component({
    selector: 'my-workoutlist',
    templateUrl: 'App/Components/NavPages/WorkoutList/WorkoutList.component.html'
})
export class WorkoutListComponent {
    LegWorkoutList: string[];
    ArmWorkoutList: string[];
    BackWorkoutList: string[];
    ShoulderWorkoutList: string[];
    ChestWorkoutList: string[];

    constructor() {
        this.LegWorkoutList = [
            'Barbell Squat(Max Squat 160 Pds)',
            'Stiff Legged Barbell Deadlift',
            'V - Squat Machine',
            'Leg Press Machine',
            'Leg Extension',
            'Lying Leg Curl Machine',
            'Weighted Calf Raises(Seated or Standing)',
            'Hip Abductor Machine(Inner and Outer Thigh)',
            'Weighted Calf Raises(Seated or Standing)',
            'Barbell Hip Thrust'
        ],
        this.ArmWorkoutList = [
            'Alternate Seated Bicep Curl',
            'Dips(Tricep)',
            'Cable curl Tricep Pushdown',
            'Barbell Curl',
            'Hammer Curl',
            'O / H Tricep Extension',
            'Rope Pushdown',
            'Tricep Bendover Rope',
            'Cable Curl Bicep',
            'EZ Bar Tricep',
            'Bicep Concentration',
            'Reverse Barbell Curl(Forearm)',
            'Dumbell Wrist Curl(Forearm)',
            'Barbell Reverse Wrist Curl(Forearm)'
        ],
        this.BackWorkoutList = [
            'Barbell Deadlift',
            'Bentover Barbell Deadlift',
            'Wide Grip Pull Ups',
            'Reverse Grip Bent Over Rows',
            'Dumbell or Barbell Shrug',
            'One Arm Dumbell Row',
            'Wide Grip & V - Bar Lat pulldown',
            'Straight Arm pull Down',
            'Inclined Sleep Dumbell Updown'
            ],
        this.ShoulderWorkoutList = [
            'Barbell overhead press or push press',
            'Wide grip upright row',
            'Standing dumbell fly or bent dumbell fly',
            'Seated barbell shoulder press',
            'One arm cable lateral raise',
            'Cable reverse fly',
            'Dumbell overhead press',
            'Barbell front raise',
            'Face pull'
        ],
        this.ChestWorkoutList = [
            'Cable crossover',
            'Butterfly',
            'Benchpress',
            'Dumbell flys',
            'Iso lateral chest',
            'Dumbell bench press',
            'Low cable crossover',
            'Hammer strength',
            'Incline dumbell benchpress and decline',
            'Dumbells on chest press',
            'Dumbell pullover'
        ]
    }

}