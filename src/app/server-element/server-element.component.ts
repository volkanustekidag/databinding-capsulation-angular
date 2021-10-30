import { Component,
  Input,
  OnChanges, 
  OnInit, 
  SimpleChange, 
  ViewEncapsulation 
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {

  @Input('srvElement') public element:  { type: string; name: string; content: string; } = {type:"a",name:"a", content:"a"};

  constructor() {
    console.log('cons called');
    
  }

  ngOnChanges(){
    console.log('ngOnchanges called');
  }

  ngOnInit(): void {    
    console.log('ngOınıt called');
  }

}
