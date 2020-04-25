import { Component, OnInit } from '@angular/core';
import { PornsService } from 'src/app/porns.service';

@Component({
  selector: 'app-porns-list',
  templateUrl: './porns-list.component.html',
  styleUrls: ['./porns-list.component.scss'],
})
export class PornsListComponent implements OnInit {

  constructor(public pornsService: PornsService) { }

  ngOnInit() {}

}
