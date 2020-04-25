import { Component, OnInit } from '@angular/core';
import { PornsService } from '../porns.service';

@Component({
  selector: 'app-porns',
  templateUrl: './porns.page.html',
  styleUrls: ['./porns.page.scss'],
})
export class PornsPage implements OnInit {

  constructor(private pornsService: PornsService) { }

  ngOnInit() {
    this.pornsService.getVideos();
  }

}
