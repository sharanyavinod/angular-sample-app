import { Component } from '@angular/core';
import { ModelManager } from "@adobe/aem-spa-page-model-manager";
import { CustomModelClient } from '../server/CustomModelClient';

@Component({
  selector: '#root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    const modelClient = new CustomModelClient("http://localhost:4502", "admin:admin");
    ModelManager.initializeAsync({
      modelClient
    });
  }
}
import {
  AEMResponsiveGridComponent,
  MapTo
} from '@adobe/aem-angular-editable-components';

MapTo('wcm/foundation/components/responsivegrid')(AEMResponsiveGridComponent);