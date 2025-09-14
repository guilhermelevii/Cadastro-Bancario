import { bootstrapApplication } from '@angular/platform-browser';
import { provideNgxMask } from 'ngx-mask';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideNgxMask()
  ]
})
.catch((err) => console.error(err));

// Arquivo de entrada principal que inicializa o módulo principal da aplicação.