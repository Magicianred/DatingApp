import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Members } from 'src/app/models/member';
import { MembersService } from 'src/app/Services/members.service';

@Component({
  selector: 'app-members-detail',
  templateUrl: './members-detail.component.html',
  styleUrls: ['./members-detail.component.css']
})
export class MembersDetailComponent implements OnInit {

  member:Members;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor( private memberService:MembersService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadMamber();

    this.galleryOptions = [
      {
        width:'500px',
        height:'500px',
        imagePercent:100,
        thumbnailsColumns:4,
        imageAnimation:NgxGalleryAnimation.Slide,
        preview:false
      }
    ];

    
  }

  getImages():NgxGalleryImage[]{
    const imageUrl = [];
    for (const photo of this.member.photos) {
      imageUrl.push({
        small:photo?.url,
        medium:photo?.url,
        big:photo?.url
      });
    }

    return imageUrl;
  }

  loadMamber(){
    this.memberService.getMember(this.route.snapshot.paramMap.get('username'))
    .subscribe(
      member => {
        this.member = member;
        this.galleryImages = this.getImages();
      })
  }



}
