import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
@Input () faceSnap! : FaceSnap;
  snapText!: string;

  ngOnInit(): void {
    this.snapText = "Add snaps";
  }

  onAddSnap (){
    if (this.snapText === 'Add snaps') {
    this.faceSnap.snaps++;
    this.snapText = 'No add snap';
    } else {
      this.faceSnap.snaps--;
      this.snapText = 'Add snaps';
    }
    
  }
}
