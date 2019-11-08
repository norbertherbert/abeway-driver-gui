import { Component, OnInit } from '@angular/core';
import { createUPDU, createDPDU } from 'abeeway-driver';

const UPLINK_SAMPLE = '0784f9835002050000000606000000010e000000030f00000001';
const DOWNLINK_SAMPLE = '0b08010000025800000004b0050000000103000000001600000000';

@Component({
  selector: 'app-decode',
  templateUrl: './decode.component.html',
  styleUrls: ['./decode.component.css']
})
export class DecodeComponent implements OnInit {


  direction = 'uplink';
  payloadHex: string;
  decodedMessage = '';

  constructor() { }

  ngOnInit() {
    this.payloadHex = UPLINK_SAMPLE;
  }

  decode(): void {
    try {
      const pdu = (this.direction === 'uplink') ? createUPDU(this.payloadHex) : createDPDU(this.payloadHex);
      this.decodedMessage = pdu.toJSON();
    } catch (err) {
      this.decodedMessage = err.message;
    }
  }

  dirChange(): void {
    this.payloadHex = (this.direction === 'uplink') ? UPLINK_SAMPLE : DOWNLINK_SAMPLE;
  }

}
