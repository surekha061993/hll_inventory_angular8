import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons,NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-chargesmaster',
  templateUrl: './chargesmaster.component.html',
  styleUrls: ['./chargesmaster.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class ChargesmasterComponent implements OnInit {
  closeResult = '';

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
  }
  open(content) {
    this.modalService.open(content);
  }

}
