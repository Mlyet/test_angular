import { Injectable } from "@angular/core";
import { FaceSnapModel } from "../models/face-snaps.models";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnapModel [] = [];
    
    getAllFaceSnaps () : FaceSnapModel[] {
      this.faceSnaps = [
        {
            id: 1,
            title: 'Début sur Angular',
            description: "J'espère que c'est bien !",
            imgUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
            createDate: new Date(),
            snaps: 150,
            location: "Lyon",
          },
          {
            id: 2,
            title: 'Réutilisation du component',
            description: "J'espere que cela va marcher 🤞",
            imgUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
            createDate: new Date(),
            snaps: 0,
            location: "le jardin"
          },
          {
            id: 3,
            title: '3 images identiques',
            description: "Je sais il y a trois images identiques mais laquelles est la vrai ?",
            imgUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
            createDate: new Date(),
            snaps: 0
          },
          {
            id: 4,
            title: '3 images identiques',
            description: "Je sais il y a trois images identiques mais laquelles est la vrai ?",
            imgUrl: "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",
            createDate: new Date(),
            snaps: 0
          }
    ]
      return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnapModel {
      const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      if (!faceSnap) {
          throw new Error('FaceSnap not found!');
      } else {
          return faceSnap;
      }
    }

    snapFaceSnapById(faceSnapId: number, snapType: string): void {
      const faceSnap = this.getFaceSnapById(faceSnapId);
      snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
}