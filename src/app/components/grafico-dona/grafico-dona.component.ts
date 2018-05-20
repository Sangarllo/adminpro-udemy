import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: []
})
export class GraficoDonaComponent implements OnInit {

  @Input() chartLeyenda: string = 'titulo';
  @Input() chartLabels: string[] = ['Label 1', 'Label 2', 'Label 3'];
  @Input() chartData: number[] = [350, 450, 100];
  @Input() chartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
