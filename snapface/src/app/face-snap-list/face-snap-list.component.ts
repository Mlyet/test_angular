import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snaps.models';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {
  faceSnap!: FaceSnap[];
  constructor () {}

  ngOnInit(): void {
    this.faceSnap = [
      {
        title: 'Début sur Angular',
        desciption: "J'espère que c'est bien !",
        imgUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        createDate: new Date(),
        snaps: 150,
        location: "Lyon",
      },
      {
        title: 'Réutilisation du component',
        desciption: "J'espere que cela va marcher 🤞",
        imgUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        createDate: new Date(),
        snaps: 0,
        location: "le jardin"
      },
      {
        title: '3 images identiques',
        desciption: "Je sais il y a trois images identiques mais laquelles est la vrai ?",
        imgUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        createDate: new Date(),
        snaps: 0
      },
      {
        title: '3 images identiques',
        desciption: "Je sais il y a trois images identiques mais laquelles est la vrai ?",
        imgUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
        createDate: new Date(),
        snaps: 0
      }
    ]
  }

}
