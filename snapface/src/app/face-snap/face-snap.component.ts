import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;

  ngOnInit(): void {
    this.title= "Début sur Angular";
    this.description= "J'espère que c'est bien !";
    this.createDate= new Date();
    this.snaps = 1;
  }

}
