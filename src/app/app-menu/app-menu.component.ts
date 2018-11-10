import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
    selector: 'app-app-menu',
    templateUrl: './app-menu.component.html',
    styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

    constructor() { }

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'fas fa-home',
                routerLink: 'home'

            },
            {
                label: 'Settings',
                icon: 'pi pi-pw pi-file',
                routerLink: 'settings'

            },
            {
                label: 'product Master',
                icon: 'pi pi-fw pi-pencil',
                routerLink: 'product-master',

            },
            {
                label: 'Stock Control',
                icon: 'fas fa-shipping-fast',
                routerLink: 'stock-control',

            },
            {
                label: 'Customer Details',
                icon: 'pi pi-fw pi-pencil',
                routerLink: 'customer-details',

            },
            {
                label: 'Reports',
                icon: 'pi pi-pw pi-file',
                items: [
                    {
                        label: 'Monthly-Reports',
                        icon: 'pi pi-pi pi-bars',
                        routerLink: 'reports/monthly-reports'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-pi pi-search'
                    }
                ]

            },
            {
                label: 'Add New Product',
                icon: 'fas fa-plus-square',
                routerLink: 'product-master/new-product'

            },
            {
                label: 'Settings',
                icon: 'pi pi-pw pi-file',
                routerLink: 'settings'

            },
            {
                label: 'Settings',
                icon: 'pi pi-pw pi-file',
                routerLink: 'settings'

            },
            {
                label: 'Settings',
                icon: 'pi pi-pw pi-file',
                routerLink: 'settings'

            },
            {
                label: 'Settings',
                icon: 'pi pi-pw pi-file',
                routerLink: 'settings'

            },
            {
                label: 'Help',
                icon: 'fa fa-fw fa-twitter',
                items: [
                    {
                        label: 'Contents',
                        icon: 'pi pi-pi pi-bars'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-pi pi-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'User',
                                icon: 'pi pi-fw pi-file',
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            { label: 'Save', icon: 'pi pi-fw pi-save' },
                            { label: 'Update', icon: 'pi pi-fw pi-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [
                            { label: 'Delete', icon: 'pi pi-fw pi-minus' }
                        ]
                    }
                ]
            }
        ];
    }


}
