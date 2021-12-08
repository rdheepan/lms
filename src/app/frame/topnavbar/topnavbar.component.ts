import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.scss'],
})
export class TopnavbarComponent implements OnInit {
  @Input() userName = 'User Name';
  constructor() {}

  ngOnInit(): void {}
}
