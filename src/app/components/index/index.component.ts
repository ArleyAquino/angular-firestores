import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from '../../app-routing.module';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

  event_list = [
    {
      event:' Event 1',
      img: 'https://cdn.pixabay.com/photo/2019/03/05/01/56/fashion-4035390_960_720.png',
    },
     {
      event:' Event 2',    
      img:'https://st2.depositphotos.com/3826639/5419/v/950/depositphotos_54194025-stock-illustration-old-fashioned-mannequin-vector-card.jpg',
       },
     {
      event:' Event 3',
      img: 'https://cdn.pixabay.com/photo/2018/09/22/10/03/dress-form-3694871_960_720.png',
    },
     {
      event:' Event 4',
      img: 'https://st2.depositphotos.com/1797973/6784/v/950/depositphotos_67848261-stock-illustration-dummies-with-dresses-fashion-illustration.jpg',
    },
    {
      event:' Event 5',
      img: 'https://cdn.pixabay.com/photo/2018/09/22/10/03/dress-form-3694871_960_720.png',
    },
    
  ]

}
