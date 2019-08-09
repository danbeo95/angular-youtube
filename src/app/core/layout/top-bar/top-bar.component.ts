import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  searchQuery: string;
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  goToSearchPage() {
    this.router.navigate(['search'], {
      queryParams: {
        q:this.searchQuery
      }
    })
  }
}
