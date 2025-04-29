import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
    templateUrl: 'default-layout.component.html',
    imports: [
        RouterOutlet,
        HeaderComponent
    ]
})
export class DefaultLayoutComponent {
    constructor() {}
}
