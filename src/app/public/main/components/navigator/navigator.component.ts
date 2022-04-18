import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  flagNav: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document,private renderer: Renderer2, private router: Router) { }

  ngOnInit(): void {
  }

  navigate(route:string):void
  {
    this.router.navigate([route]);
    this.flagNav = false;
    this.renderer.removeClass(this.document.body, 'overflow-hidden');
  }

  toggleNav(): void
  {
    this.flagNav = !this.flagNav;

    if(this.flagNav)
    {
      this.renderer.addClass(this.document.body,'overflow-hidden');
    }
    else
    {
      this.renderer.removeClass(this.document.body,'overflow-hidden');
    }
  }

}
