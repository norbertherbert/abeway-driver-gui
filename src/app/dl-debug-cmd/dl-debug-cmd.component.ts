import { Component, OnInit } from '@angular/core';
import {
  CPDU_DlHeaderShort, E_DPDUType,
  DPDU_DebugCmd, E_DebugCmd,
} from 'abeeway-driver';


@Component({
  selector: 'app-dl-debug-cmd',
  templateUrl: './dl-debug-cmd.component.html',
  styleUrls: ['./dl-debug-cmd.component.css']
})
export class DlDebugCmdComponent implements OnInit {

  debugCmdAckToken = Math.floor(Math.random() * 16);

  E_DebugCmd: typeof E_DebugCmd = E_DebugCmd;
  debugCmdKeys: any[];
  selectedDebugCmd = '1';

  debugCmdEncoded = '';

  constructor() { }

  ngOnInit() {
    this.debugCmdKeys = Object.keys(E_DebugCmd).filter(k => typeof E_DebugCmd[k as any] === 'string' );
  }

  debugCmdEncode(): void {
    try {
      const pdu = new DPDU_DebugCmd ({
        header: new CPDU_DlHeaderShort({
            type:     E_DPDUType.DEBUG_COMMAND,
            ackToken: this.debugCmdAckToken,
            optData:  0x0,
        }),
        debugCmd:     parseInt(this.selectedDebugCmd, 10),
      });
      this.debugCmdEncoded = pdu.toHexString();
    } catch (err) {
      this.debugCmdEncoded = err.message;
    }
  }

}
