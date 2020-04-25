import { Component, OnInit, Input } from '@angular/core';
import { PornVideo } from 'src/app/porns.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-porns-list-item',
  templateUrl: './porns-list-item.component.html',
  styleUrls: ['./porns-list-item.component.scss'],
})
export class PornsListItemComponent {

  constructor(public router: Router) {}

  @Input()
  pornItem: PornVideo;
}
