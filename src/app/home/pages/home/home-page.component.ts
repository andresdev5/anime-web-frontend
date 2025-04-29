import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    templateUrl: 'home-page.component.html',
    imports: [
        InputTextModule
    ]
})
export class HomePageComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
