import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {
  CPDU_DlHeaderShort, E_DPDUType,
  DPDU_ReqConf,
  C_ParamDescriptions,
} from 'abeeway-driver';


@Component({
  selector: 'app-dl-req-conf',
  templateUrl: './dl-req-conf.component.html',
  styleUrls: ['./dl-req-conf.component.css']
})
export class DlReqConfComponent implements OnInit {

  C_ParamDescriptions: typeof C_ParamDescriptions = C_ParamDescriptions;

  reqConfAckToken = Math.floor(Math.random() * 16);
  selectedParameterIDs = new FormControl();
  reqConfEncoded = '';

  constructor() { }

  ngOnInit() { }

  reqConfEncode(): void {
    try {
      const pdu = new DPDU_ReqConf ({
        header: new CPDU_DlHeaderShort({
            type:     E_DPDUType.REQUEST_CONFIGURATION,
            ackToken: this.reqConfAckToken,
            optData:  0x0,
        }),
        paramIDs: this.selectedParameterIDs.value ? this.selectedParameterIDs.value.map(element => +element) : [],
      });
      this.reqConfEncoded = pdu.toHexString();
    } catch (err) {
      this.reqConfEncoded = err.message;
    }
  }

}
