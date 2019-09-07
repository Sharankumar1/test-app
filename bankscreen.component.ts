import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bankscreen',
  templateUrl: './bankscreen.component.html',
  styleUrls: ['./bankscreen.component.css']
})
export class BankscreenComponent implements OnInit {

  arr = [{"Bankname":"BHARATCORPORATIVEPVTLTD","IFSC":"BCBMC00007","BankId":"68","Branch":"KORAMANAGALA"},
  {"Bankname":"CITYUNIONBAN","IFSC":"BCBMC00008","BankId":"69","Branch":"MAGADIROAD"},
  {"Bankname":"BHARATCORPORATIVEPVTLTD","IFSC":"BCBMC00007","BankId":"70","Branch":"KORAMANAGALA"},
];

  constructor() { }

  ngOnInit() {
  }

}
