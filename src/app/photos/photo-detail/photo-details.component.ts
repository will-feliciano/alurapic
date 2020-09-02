import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Photo } from "../photo/photo";
import { PhotoService } from "../photo/photo.service";
import { Observable } from "rxjs";

@Component({
    templateUrl: './photo-details.component.html',
    styleUrls: ['./photo-details.component.css']
})
export class PhotoDetailsComponent implements OnInit {

    //photo: Photo;
    photo$: Observable<Photo>;
    photoId: number;

    constructor(
        private route: ActivatedRoute,
        private photoService: PhotoService,
        private router: Router
    ) {}

    ngOnInit(): void {
        
        this.photoId = this.route.snapshot.params.photoId;
        // this.photoService
        //     .findById(id)
        //     .subscribe(photo => this.photo = photo);

        this.photo$ = this.photoService.findById(this.photoId);        
    }

    remove() {
        this.photoService
            .removePhoto(this.photoId)
            .subscribe(() => this.router.navigate(['']));
    }
}