import { Component, OnInit, Input } from '@angular/core';
import { FaceSnapModel } from '../models/face-snaps.models';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
@Input()faceSnap!: FaceSnapModel;
snapText!: string;

constructor(private faceSnapsService: FaceSnapsService,
            private router: Router) {}

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
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
