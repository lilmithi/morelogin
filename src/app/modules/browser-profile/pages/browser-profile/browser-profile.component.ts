import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserProfileTableComponent } from '../../components/browser-profile-table/browser-profile-table.component';

@Component({
  selector: 'app-browser-profile',
  standalone: true,
  templateUrl: './browser-profile.component.html',
  styleUrl: './browser-profile.component.scss',
  imports: [MatButtonModule, MatIconModule, BrowserProfileTableComponent],
})
export class BrowserProfileComponent {}
