import { inject } from '@angular/core';
import { SpinnerService } from '@shared/services/spinner.service';
import { finalize } from 'rxjs';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export const SpinnerInterceptor:HttpInterceptorFn = (req,next) =>{

  const _spinnerService = inject(SpinnerService);
  
  _spinnerService.show();

  return next(req).pipe(finalize(() => _spinnerService.hide()));
};


// @Injectable({ providedIn: 'root' })
// export class SpinnerInterceptor implements HttpInterceptor {
//   private readonly _spinnerService = inject(SpinnerService);

//   intercept(
//     request: HttpRequest<unknown>,
//     next: HttpHandler
//   ): Observable<HttpEvent<unknown>> {
//     this._spinnerService.show();
//     return next
//       .handle(request)
//       .pipe(finalize(() => this._spinnerService.hide()));
//   }
// }
