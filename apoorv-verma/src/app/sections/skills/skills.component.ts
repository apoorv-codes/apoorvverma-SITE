import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

    skills: string[] = [
        'iOS Development', 'xCode', 'Figma', 'UIKit', 'Swift', 'Objective C',
        'XML', 'MVVM Architecture', 'SwiftUI', 'Combine', 'Resolver', 'AVKit',
        'Firebase', 'Design Patterns', 'Restful APIs', 'JIRA', 'Agile methodologies', 'GIT'
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
