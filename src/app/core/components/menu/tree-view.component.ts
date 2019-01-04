import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


import { MENUS } from './tree-view-itens';
import { TreeViewInfo } from './tree-view.metadata';

@Component({
  selector: 'app-tree-view-menu',
  templateUrl: './tree-view.component.html'
})

export class TreeViewComponent implements OnInit {

  public links: Array<TreeViewInfo> = [];
  public currentUrl: string;

  constructor(private router: Router) { this.getCurrentUrl();}

  ngOnInit() {
    this.getmlinks();
  }

  getmlinks() {
    this.links = MENUS.filter(itens => itens).sort((a, b) => {
      if (a.sublinks) {
        a.sublinks = this.sortChildren(a.sublinks);
      }
      if (b.sublinks) {
        b.sublinks = this.sortChildren(b.sublinks);
      }
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  }

  sortChildren(children) {
    children = children.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });

    if (children.subLinks) {
      this.sortChildren(children.subLinks);
    } else {
      return children;
    }
  }

  getCurrentUrl(){
    this.router.events
        .subscribe((event: any) => {
          if(event instanceof NavigationEnd) {
            this.currentUrl = event.url
          }
        });
  }
}
