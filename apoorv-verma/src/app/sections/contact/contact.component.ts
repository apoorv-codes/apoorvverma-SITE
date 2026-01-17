import { Component, OnInit } from '@angular/core';
import { faInstagram, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    instagramIcon = faInstagram;
    githubIcon = faGithub;
    linkedInIcon = faLinkedin;
    twitterIcon = faTwitter;

    emailIcon = faEnvelope;
    mapIcon = faMapMarkerAlt;
    phoneIcon = faPhone;

    constructor() { }

    ngOnInit(): void {
    }

}
