import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snaps.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  secondSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = {
      title: 'Début sur Angular',
      desciption: "J'espère que c'est bien !",
      imgUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      createDate: new Date(),
      snaps: 0,
      location: "Lyon",
    };
    this.myOtherSnap = {
      title: 'Réutilisation du component',
      desciption: "J'espere que cela va marcher 🤞",
      imgUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      createDate: new Date(),
      snaps: 0,
      location: "le jardin"
    };
    this.secondSnap = {
      title: '3 images identiques',
      desciption: "Je sais il y a trois images identiques mais laquelles est la vrai ?",
      imgUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
      createDate: new Date(),
      snaps: 0
    };
  }

}
