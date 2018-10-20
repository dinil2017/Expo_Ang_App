import { Component, OnInit } from '@angular/core';
import { MasterService } from './master.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  sysparams = [];    
  codeMasters = [];    

  constructor(private masterService: MasterService) { }

  ngOnInit() {
    this.sysparams = this.masterService.getSystemParams();
    this.codeMasters = this.masterService.getCodeMasters();
  }

  onEdit(id: number) {
    
  }

  onDelete(id: number) {

  }

}
