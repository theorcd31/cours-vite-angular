import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) {}

  notifySuccess(msg: string) {
    this.toastr.success(msg, 'Success', {
      timeOut: 2500,
      positionClass: 'toast-bottom-center',
    });
  }

  notifyError(msg: string) {
    this.toastr.error(msg, 'Error', {
      timeOut: 2000,
      positionClass: 'toast-top-center',
    });
  }

  notifySuccessColored(msg: string) {
    this.toastr.success(msg, 'Success', {
      timeOut: 2500,
      positionClass: 'toast-top-center',
      toastClass: 'ngx-toastr colored-toast'
    });
  }

  notifyWarning(msg: string) {
    this.toastr.warning(msg, 'Warning', {
      timeOut: 2000,
      positionClass: 'toast-top-center',
    });
  }
}