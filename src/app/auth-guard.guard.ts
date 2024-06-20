import { CanActivateFn, Router } from '@angular/router';
import { ApiService } from './services/api.service';
import { inject } from '@angular/core';

import { map, tap } from 'rxjs/operators';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const apiService = inject(ApiService);
  const router = inject(Router);

  return apiService.jwtUserToken().pipe(
    map((result) => !!result),
    tap(result => {
      if(!result) {
          router.navigateByUrl('/login').then();
          return result;
      } 

      return result;
    })
  )



 
};
