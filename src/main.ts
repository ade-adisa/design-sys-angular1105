import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { WrapperComponent } from './app/wrapper/wrapper.component';


bootstrapApplication(WrapperComponent, appConfig)
  .catch((err) => console.error(err));
