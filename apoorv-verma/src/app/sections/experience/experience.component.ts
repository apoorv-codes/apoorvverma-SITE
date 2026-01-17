import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

    experiences = [
        {
            title: 'SDE-1 (iOS Developer)',
            company: 'Zomato',
            location: 'Gurugram, India',
            duration: '11/2024 - Present',
            details: [
                'Developed an Objective-C in-app tool for testing on custom servers, reducing debugging time.',
                'Implemented SwiftUI as a proof of concept (POC) to analyze performance.',
                'Proposed a State-Model-View (SMV) architecture, later adopted with modifications.',
                'Optimized view reloading using Combine, reducing unnecessary reloads.',
                'Contributed to Orders, OwnerHub, and Restaurant Partner Ticket Support features.'
            ]
        },
        {
            title: 'iOS Developer',
            company: 'GeeksForGeeks',
            location: 'Noida, India',
            duration: '07/2023 - 10/2024',
            details: [
                'Orchestrated major features in the GeeksforGeeks App, boosting engagement by 40%.',
                'Improved app performance by addressing memory over usage, resulting in 30% reduction in load time.',
                'Leveraged Alamofire, Firebase, ACE Editor, and Realm database.',
                'Designed app architecture with MVVM, Coordinator Pattern using Resolver.'
            ]
        },
        {
            title: 'iOS Developer Intern',
            company: 'Quantum IT Innovation',
            location: 'Noida, India',
            duration: '02/2023 - 07/2023',
            details: [
                'Developed two iOS applications using SwiftUI and one using UIKit.',
                'Delivered three client iOS applications, showcasing adaptability.',
                'Maintained codebase for existing UIKit applications.'
            ]
        },
        {
            title: 'SDE Intern',
            company: 'Litehires Global Pvt. Ltd.',
            location: 'New Delhi, India',
            duration: '04/2022 - 01/2023',
            details: [
                'Designed and implemented a scalable Applicant Tracking System (ATS).',
                'Accelerated the candidate pool to over 1500.',
                'Collaborated with backend developers to manage Jiffyhire’s frontend.'
            ]
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
