import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'This is just a test'}];

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
        this.serverElements.push({
          type: 'server',
          name: serverData.serverName,
          content: serverData.serverContent
        });
  }

  onBlueprintAdded(blueprintAdded: {serverName: string, serverContent: string}) {
        this.serverElements.push({
          type: 'blueprint',
          name: blueprintAdded.serverName,
          content: blueprintAdded.serverContent
        });
  }
  onChangedFirst () {
    this.serverElements[0].name = 'Changed';
  }
  onDestroy() {
    this.serverElements.splice(0, 1);
  }

}
