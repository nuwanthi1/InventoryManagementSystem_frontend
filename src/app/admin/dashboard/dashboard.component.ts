import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DashboardService } from 'src/app/services/dashboard.service';
import { NgxChartsModule, ScaleType } from '@swimlane/ngx-charts';
import { Color } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  totalAssetsData: any[] = [];
  freeAssetsData: any[] = [];
  assignedAssetsData: any[] = [];

  colorScheme: string | Color = {
    name: 'primary',
    selectable: true,
    group: ScaleType.Ordinal, 
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  constructor(
    private dashboardService: DashboardService,
    private cdr: ChangeDetectorRef 
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.dashboardService.getTotalAssetsByType().subscribe(data => {
      this.totalAssetsData = this.transformData(data);
      this.cdr.detectChanges(); 
    });

    this.dashboardService.getFreeAssetsByType().subscribe(data => {
      this.freeAssetsData = this.transformData(data);
      this.cdr.detectChanges(); 
    });

    this.dashboardService.getAssignedAssetsByType().subscribe(data => {
      this.assignedAssetsData = this.transformData(data);
      this.cdr.detectChanges(); 
    });
  }

  onSelect(event: any) {
    console.log(event);
  }

  transformData(data: any): any[] {
    return Object.keys(data).map(key => ({ name: key, value: data[key] }));
  }
}
