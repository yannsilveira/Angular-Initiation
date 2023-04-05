import { Component } from "@angular/core";

@Component ({
    selector: 'assignment3',
    templateUrl: './assignment3.component.html',
    styleUrls: ['./assignment3.component.css']
})
export class Assignment3 {
    showParagraph = false;
    logButtonDetail = [];

    tooglePassword() {
        this.showParagraph = !this.showParagraph;
        const current = new Date();
        this.logButtonDetail.push(current.getTime());
    }
}