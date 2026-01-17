import { Component, OnInit } from '@angular/core';
import { faAddressCard, faBriefcase, faComments, faContactCard, faCreditCard, faGraduationCap, faHome, faImage, faLayerGroup, faTools } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  homeIcon = faHome
  aboutIcon = faAddressCard
  skillsIcon = faTools
  experienceIcon = faBriefcase
  workIcon = faLayerGroup
  contactIcon = faContactCard

  constructor() { }

  ngOnInit(): void {
  }

}
