import { ApiServiceService } from '../servi/api.service.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.scss']
})
export class CoinDetailsComponent implements OnInit {

  coinData:any
  coinID ! :string;
  days : number= 1; 
  currency : string = 'USD';



  constructor(private api : ApiServiceService, private activatedRoute : ActivatedRoute  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(val=>{
       this.coinID = val ['id'];  
    });
    this.getCoinData();
  }

 getCoinData() {
  this.api.getCurrencyById (this.coinID  )
  .subscribe(res=>{this.coinData = res; console.log(this.coinData)})
 }

}
