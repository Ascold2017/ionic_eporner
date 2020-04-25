import { Component, OnInit } from '@angular/core';
import { PornVideo, PornsService } from 'src/app/porns.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public porn: PornVideo;
  constructor(private pornsService: PornsService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.porn = this.pornsService.getPorn(params.id);
    });
  }

  get embedUrl() {
    return this.porn && this.sanitizer.bypassSecurityTrustResourceUrl(this.porn.embed);
  }

}
