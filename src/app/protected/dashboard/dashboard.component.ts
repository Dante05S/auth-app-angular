import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.getUser().subscribe(res=>console.log(res));
  }

}
