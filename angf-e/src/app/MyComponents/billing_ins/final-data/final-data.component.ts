import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NetApiService } from 'src/app/Services/net-api.service';
import { ClientApiService } from 'src/app/Services/client-api.service';

@Component({
  selector: 'app-final-data',
  templateUrl: './final-data.component.html',
  styleUrls: ['./final-data.component.css']
})
export class FinalDataComponent implements OnInit {
  @Input() item!:any
  x:any
  constructor(public service: ClientApiService,private route: ActivatedRoute,private router: Router){ }

  ngOnInit(): void {
  }

  show(data:any){
    this.x=data
  }
 

}
