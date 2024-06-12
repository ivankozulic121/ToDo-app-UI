import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { jwtInterceptor }  from './jwt.interceptor';
import { errorInterceptor } from './error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(),

 provideHttpClient(withFetch(), withInterceptorsFromDi()), {provide:HTTP_INTERCEPTORS, useClass: jwtInterceptor, multi: true },
{provide: HTTP_INTERCEPTORS, useClass: errorInterceptor, multi:true}]

};
