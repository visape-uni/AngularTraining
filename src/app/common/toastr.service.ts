import { Injectable } from '@angular/core';

declare let toastr:any
@Injectable({
  providedIn: 'root'
})
export class ToastrService {
  success(message: string, title?: string) {
    toastr.success(message, title)
    //NO FUNCIONA TOASTR (DESFASADO)
  }
}
