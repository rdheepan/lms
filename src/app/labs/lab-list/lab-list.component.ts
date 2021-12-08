import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LabsService } from '../services/labs.service';

export interface Lab {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.scss'],
})
export class LabListComponent implements OnInit {
  labs$: Observable<Lab[]> | undefined;

  constructor(
    private labService: LabsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.labs$ = this.labService.loadLabs<Lab[]>();
  }

  start(lab: Lab) {
    this.router.navigate(['lab-details', lab.id]);
  }
}
