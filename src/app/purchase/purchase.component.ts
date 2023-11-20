import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { Route, Router, RouterModule } from '@angular/router';
import { ApiServiceService } from '../servi/api.service.service';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  bannerData: any = [];
  currency : string = "USD"
  dataSource!: MatTableDataSource<any>; 
  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api : ApiServiceService, private router : Router) { }

  ngOnInit(): void {
    this.getAlllData();
    this.getBannerData ();
  }
  getBannerData()
  {this.api.getTrendingCurrency("USD")
    .subscribe(res =>{console.log(res);
      this.bannerData = res;
    })
  }
  getAlllData()
  {this.api.getCurrency("USD")
    .subscribe(res =>
      {console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
  
    })
  }
  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  gotoDetails(row: any)  {
    this.router.navigate(['coin-details',row.id])
  }
}
  
 
 