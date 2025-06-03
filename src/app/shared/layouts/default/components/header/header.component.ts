import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.scss',
    imports: [NavbarComponent],
})
export class HeaderComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
