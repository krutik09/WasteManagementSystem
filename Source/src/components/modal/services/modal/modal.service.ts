import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private readonly ShowModal = signal<boolean>(false)
  private Heading:string="Confirm"
  private Message:string=""
  private OnClose!:()=>any
  private OnConfirm!:()=>any
  show(heading:string,message:string,onClose:()=>any,onConfirm:()=>any){
    this.Heading = heading
    this.Message = message
    this.OnClose = onClose
    this.OnConfirm = onConfirm
    this.ShowModal.set(true)
  }
  GetShowModalSignal(){
    return this.ShowModal
  }
  Hide(){
    this.ShowModal.set(false)
  }
  getHeading(){
    return this.Heading
  }
  getMessage(){
    return this.Message
  }
  getOnClose(){
    return this.OnClose
  }
  getOnConfirm(){
    return this.OnConfirm
  }
}
