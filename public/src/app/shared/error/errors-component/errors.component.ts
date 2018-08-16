import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'cm-error',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  routeParams;
  data;

  constructor(private activatedRoute: ActivatedRoute, private _globalService: GlobalService) {
    this._globalService.showHeaderAndFooter = false;
  }

  ngOnInit() {
    this.routeParams = this.activatedRoute.snapshot.queryParams;
    this.data = this.activatedRoute.snapshot.data;
  }
}
