import { Component } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrl: './header-component.component.css'
})
export class HeaderComponentComponent {
  universityName: string = 'National University of San Agustin';
  title1: string = 'COMPUTER'; // Texto en negrita (título)
  title2: string = 'SCIENCE';
  description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus quis erat sit amet auctor. Fusce varius volutpat eleifend. Nunc dapibus, libero quis tempor scelerisque, tellus quam hendrerit nunc, eget commodo massa sapien vel dui.'; // Texto regular (descripción)
}
