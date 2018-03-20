import { Component, OnInit } from '@angular/core';
import {Router, NavigationEnd, NavigationStart} from '@angular/router';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Location, PopStateEvent } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  constructor(private location: Location,
              private router: Router) { }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  onActivate(e, outlet) {
    outlet.scrollTop = 0;
  }

  ngOnInit() {
    this.location.subscribe((ev: PopStateEvent) => {
      this.lastPoppedUrl = ev.url;
  });
  this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationStart) {
          // tslint:disable-next-line:curly
          if (ev.url !== this.lastPoppedUrl)
              this.yScrollStack.push(window.scrollY);
      } else if (ev instanceof NavigationEnd) {
          if (ev.url === this.lastPoppedUrl) {
              this.lastPoppedUrl = undefined;
              window.scrollTo(0, this.yScrollStack.pop());
          // tslint:disable-next-line:curly
          } else
              window.scrollTo(0, 0);
      }
  });
}


  }
