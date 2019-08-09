import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  isShowMenu: boolean = true;
  pages:Array<{icon:string,title:string,url:string}> = [];
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    this.initPages();
  }

  initPages(){
    this.pages = [
      {icon:'fa-home',title:'Home',url:'home'},
      {icon:'fa-home',title:'Trending',url:'trending'}

    ]
  }
  navigatePage(url:string){
    this.router.navigate([url]);
  }
  toggleMenu() {
    this.isShowMenu = !this.isShowMenu;
  }
}
