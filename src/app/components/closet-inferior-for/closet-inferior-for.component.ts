import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-closet-inferior-for',
  templateUrl: './closet-inferior-for.component.html',
  styleUrls: ['./closet-inferior-for.component.css']
})
export class ClosetInferiorForComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onUpload(event){
    console.log('subir',event);
  }

}
