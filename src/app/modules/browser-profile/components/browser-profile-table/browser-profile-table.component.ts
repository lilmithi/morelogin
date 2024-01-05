import { Component, OnInit, getPlatform } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { Platform } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';

interface IBrowserProfile {
  name: string;
  state: string;
  accountInfo: string;
}
@Component({
  selector: 'app-browser-profile-table',
  standalone: true,
  imports: [
    CommonModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './browser-profile-table.component.html',
  styleUrl: './browser-profile-table.component.scss',
})
export class BrowserProfileTableComponent implements OnInit {
  constructor(public platform: Platform) {}
  dataSource = new MatTableDataSource<IBrowserProfile>();
  displayedColumns: string[] = [
    'profileName',
    'operation',
    'state',
    'accountInfo',
    'proxyInfo',
    'note',
    'tag',
    'group',
    'settings',
  ];

  timedOutCloser: any;

  mouseEnter(trigger: any) {
    if (this.timedOutCloser) {
      clearTimeout(this.timedOutCloser);
    }
    trigger.openMenu();
  }

  mouseLeave(trigger: any) {
    this.timedOutCloser = setTimeout(() => {
      trigger.closeMenu();
    }, 50);
  }

  ngOnInit(): void {
    console.log(this.platform);
    this.dataSource.data = [
      {
        name: 'P-1',
        state: 'ready',
        accountInfo: '__',
      },
    ];
  }
}
