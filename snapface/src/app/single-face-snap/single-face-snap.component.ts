import { Component, OnInit } from '@angular/core';
import { FaceSnapModel } from '../models/face-snaps.models';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: FaceSnapModel;
  snapText!: string;

  constructor(private faceSnapService: FaceSnapsService,
              private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.snapText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
  onSnap() {
    if (this.snapText === 'Oh Snap!') {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.snapText = 'Oops, unSnap!';
    } else {
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.snapText = 'Oh Snap!';
    }
  }
}
