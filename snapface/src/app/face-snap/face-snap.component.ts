import { Component, OnInit, Input } from '@angular/core';
import { FaceSnapModel } from '../models/face-snaps.models';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
@Input () faceSnap! : FaceSnapModel;
constructor(private faceSnapsService: FaceSnapsService) {}
  snapText!: string;

  ngOnInit(): void {
    this.snapText = "Add snaps";
  }

  onAddSnap (){
    if (this.snapText === 'Add snaps') {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapText = 'No add snap';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapText = 'Add snaps';
    }
  }
}
