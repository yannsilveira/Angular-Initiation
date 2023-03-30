import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-server",
    templateUrl: "./server.component.html",
    styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit{
    serverId: number = 10;
    serverStatus: string = "offline";
    allowNewServer = false;
    serverCreationStatus = 'No server was created';
    serverName = '';
    userName = '';

    getServerStatus() {
        return this.serverStatus;
    }

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 3000);
    }

    ngOnInit(): void {
        
    }

    onCreateServer() {
        this.serverCreationStatus = 'Server was created, its name is ' + this.serverName;
    }

    onUpdateServerName(event: any) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }


    resetUserName(): void {
        this.userName = '';
    }

    onUpdateUsername(event: any) {
        this.userName = (<HTMLInputElement>event.target).value;
    }

    checkUserNameNotEmpty(): boolean {
        return this.userName === '';
    }


}