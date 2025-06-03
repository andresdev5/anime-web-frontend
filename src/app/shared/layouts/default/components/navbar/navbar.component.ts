import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss'],
    standalone: true,
    imports: [MenubarModule],
    encapsulation: ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
    menuItems: MenuItem[] = [];

    constructor() { }

    ngOnInit() {
        this.menuItems = [
            {
                label: 'Animes',
                routerLink: '/animes' // Asumiendo que tienes estas rutas configuradas
            },
            {
                label: 'Calendario',
                routerLink: '/calendario'
            },
            {
                label: 'Comunidad',
                routerLink: '/comunidad'
            }
        ];
    }
}