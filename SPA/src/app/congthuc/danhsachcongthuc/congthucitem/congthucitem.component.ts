import { Congthuc } from './../../../models/congthuc';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-congthucitem',
  templateUrl: './congthucitem.component.html',
  styleUrls: ['./congthucitem.component.css']
})
export class CongthucitemComponent implements OnInit {
  @Input() congthuc: Congthuc;

  constructor() { }

  ngOnInit(): void {
  }

}
