import { Component, OnInit } from '@angular/core';
import { createUPDU, createDPDU } from 'abeeway-driver';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.css']
})
export class DecodeComponent implements OnInit {

  uplinkPayloadHex: string;
  decodedUplink = '';

  downlinkPayloadHex: string;
  decodedDownlink = '';

  constructor() { }

  ngOnInit() {
    this.uplinkPayloadHex = '0784f9835002050000000606000000010e000000030f00000001';
    this.downlinkPayloadHex = '0b0006000000020a000000030d000000161000000001';
  }

  decodeUplink(): void {
    try {
      const pdu = createUPDU(this.uplinkPayloadHex);
      this.decodedUplink = pdu.toJSON();
    } catch (err) {
      this.decodedUplink = err.message;
    }
  }

  decodeDownlink(): void {
    try {
      const pdu = createDPDU(this.downlinkPayloadHex);
      this.decodedDownlink = pdu.toJSON();
    } catch (err) {
      this.decodedDownlink = err.message;
    }
  }

}
