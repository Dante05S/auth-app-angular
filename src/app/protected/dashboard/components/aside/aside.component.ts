import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  flagNav: boolean = false;

  menus: any[] =
  [
    {
      title: 'TU',
      items:
      [
        {
          icon: 'home',
          title: 'Tablero',
          select: true
        },
        {
          icon: 'person_pin',
          title: 'Mi Perfil',
          select: false
        },
        {
          icon: 'park',
          title: 'Tiempo libre',
          select: false
        },
        {
          icon: 'tab',
          title: 'Mis documentos',
          select: false
        },
        {
          icon: 'task_alt',
          title: 'Tareas',
          select: false
        },
      ]
    },
    {
      title: 'TU COMPAÑIA',
      items:
      [
        {
          icon: 'group',
          title: 'Empleados',
          select: false
        },
        {
          icon: 'event',
          title: 'Calendario',
          select: false
        },
        {
          icon: 'analytics',
          title: 'Informes',
          select: false
        },
        {
          icon: 'folder',
          title: 'Archivos',
          select: false
        },
        {
          icon: 'settings',
          title: 'Compañia',
          select: false
        },
      ]
    }
  ]

  ultItem: number[] = [0,0];

  constructor(@Inject(DOCUMENT) private document: Document,private renderer: Renderer2,private cookieService:CookieService,private router:Router) { }

  ngOnInit(): void {
  }

  selectItem(itemSelected:number[])
  {
    if(!(JSON.stringify(this.ultItem) === JSON.stringify(itemSelected)))
    {
      this.menus[this.ultItem[0]].items[this.ultItem[1]].select = false;
      this.menus[itemSelected[0]].items[itemSelected[1]].select = true;
      this.ultItem = itemSelected;
    }
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

  logout()
  {
    this.cookieService.delete('access_token','/');
    this.router.navigate(['/auth/login']);
  }

}
