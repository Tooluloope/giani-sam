import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  public isCollapsed = false;
  public isCollapsed1 = false;
  public isCollapsed2= false;
  public isCollapsed3= false;
  public isCollapsed4 = false;
  public isCollapsed5 = false;
  public isCollapsed6 = false;
  public isCollapsed7 = false;
  constructor( private title: Title) {
    this.title.setTitle( 'Frequently Asked Questions' );
   }

  ngOnInit() {
  }

}
