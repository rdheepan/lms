import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs';
import { Lab } from '../lab-list/lab-list.component';
import { LabsService } from '../services/labs.service';

@Component({
  selector: 'app-lab-details',
  templateUrl: './lab-details.component.html',
  styleUrls: ['./lab-details.component.scss'],
})
export class LabDetailsComponent implements OnInit {
  lab: Lab | undefined;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private labService: LabsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        filter((paramMap) => !!paramMap.get('id')),
        map((paramMap) => Number(paramMap.get('id'))),
        distinctUntilChanged(),
        switchMap((labId) => this.labService.loadLab(labId))
      )
      .subscribe((res) => {
        this.lab = res as Lab;
      });
  }
}
