import { Component, OnInit, Input } from '@angular/core';
import { LugaresService } from './../services/lugares.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'table-12-months',
  templateUrl: 'table.component.html',
  styleUrls: ['./table.component.css']

})
export class TablesComponent implements OnInit {

  constructor(private lugaresService: LugaresService, private route: ActivatedRoute) { }

  ngOnInit() { }


}
