import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    projects = [
        {
            name: 'Magic Camera',
            description: 'Camera App offering manual settings, RAW support, filters, and more.',
            duration: '11/2023 - Present',
            details: [
                'Used AVKit, Combine, Coordinator and Resolver to build the app structure with MVVMC Architecture.',
                'Created custom camera manager to handle all camera related operations within the app.',
                'Currently working on RAW camera controls features for the app.'
            ]
        },
        {
            name: 'Swift Network Manager',
            description: 'Lightweight Alamofire alternative for small scale applications.',
            duration: '05/2023 - 07/2023',
            details: [
                'Swift-based APIManager class for seamless HTTP request handling and image management using URLSession and multipart formdata.'
            ]
        },
        {
            name: 'CrypVault',
            description: 'App utilizing data segmentation, encryption, and steganography for enhanced data security.',
            duration: '05/2022 - 10/2022',
            details: [
                'Implemented a method proposed in my research paper to hide encrypted data within user device files.',
                'Ensured robust confidentiality.'
            ]
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
