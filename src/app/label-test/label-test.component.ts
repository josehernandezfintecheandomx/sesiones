import { Component, OnInit } from '@angular/core';
import { DummyService } from '../dummy.service';

@Component({
  selector: 'mifosx-label-test',
  templateUrl: './label-test.component.html',
  styleUrls: ['./label-test.component.scss']
})

export class LabelTestComponent implements OnInit {

  offices: any;
  office: any;
  loading: boolean;

  constructor(private dummyService: DummyService) { }

  ngOnInit() {
    this.loading = true;
    this.getDummyMessage();
  }

  getDummyMessage(): void {
    this.dummyService.getDummyData().subscribe((data:any) => {
      let pos = this.getRandom(data.length);
      this.offices = data;
      this.office = data[pos];
      this.loading = false; 
      // console.log(this.message);
    });
  }

  getRandom(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
