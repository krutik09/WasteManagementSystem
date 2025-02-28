import { Component, computed, inject } from '@angular/core';
import { ButtonsComponent } from "../../entities/buttons/buttons.component";
import { ModalService } from './services/modal/modal.service';

@Component({
  selector: 'app-modal',
  imports: [ButtonsComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  modalService = inject(ModalService)
  Heading:string="Confirm"
  Message:string=""
  OnClose!:()=>any
  OnConfirm!:()=>any
  className = computed(()=>{
    if(this.modalService.GetShowModalSignal()()){
      this.show()
      return "modal d-block"
    }
    else{
      return "modal"
    }
  })
  show(){
    this.Heading = this.modalService.getHeading()
    this.Message = this.modalService.getMessage()
    this.OnClose = this.modalService.getOnClose()
    this.OnConfirm = this.modalService.getOnConfirm()
  }
  ConfirmModal = () =>{
    this.modalService.Hide()
    this.OnConfirm()
  }
  CloseModal = ()=>{
    this.modalService.Hide()
    this.OnClose()
  }
}
