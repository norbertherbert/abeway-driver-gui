import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {
  CPDU_DlHeaderShort, E_DPDUType,
  DPDU_SetParam,
  CPDU_Parameter, E_ParameterId,
  E_Param_GeolocSensor,
  E_Param_GeolocMethod,
  CPDU_ParamConfigFlags,
  E_Param_TransmitStrat,
  C_ParamDescriptions,
  CPDU_ParamConfirmedUlBitmap,
} from 'abeeway-driver';

@Component({
  selector: 'app-dl-set-param',
  templateUrl: './dl-set-param.component.html',
  styleUrls: ['./dl-set-param.component.css']
})
export class DlSetParamComponent implements OnInit {

  setParamAckToken = Math.floor(Math.random() * 16);

  C_ParamDescriptions: typeof C_ParamDescriptions = C_ParamDescriptions;

  E_ParameterId: typeof E_ParameterId = E_ParameterId;
  selectedParameterIDs = new FormControl();
  parameterValues = {};

  E_Param_GeolocSensor: typeof E_Param_GeolocSensor = E_Param_GeolocSensor;
  geolocSensorKeys: any[];

  E_Param_GeolocMethod: typeof E_Param_GeolocMethod = E_Param_GeolocMethod;
  geolocMethodKeys: any[];

  E_Param_TransmitStrat: typeof E_Param_TransmitStrat = E_Param_TransmitStrat;
  transmitStratKeys: any[];

  setParamEncoded = '';

  constructor() { }

  ngOnInit() {

    this.parameterValues[E_ParameterId.UL_PERIOD] = 60;
    this.parameterValues[E_ParameterId.LORA_PERIOD] = 300;
    this.parameterValues[E_ParameterId.PW_STAT_PERIOD] = 300;
    this.parameterValues[E_ParameterId.PERIODIC_POS_PERIOD] = 3;
    this.parameterValues[E_ParameterId.GEOLOC_SENSOR] = E_Param_GeolocSensor.WiFiLPGPS.toString(10);

    this.parameterValues[E_ParameterId.GEOLOC_METHOD] = E_Param_GeolocMethod.WiFiGPS.toString(10);
    this.parameterValues[E_ParameterId.MOTION_NB_POS] = 1;
    this.parameterValues[E_ParameterId.GPS_TIMEOUT] = 30;
    this.parameterValues[E_ParameterId.AGPS_TIMEOUT] = 3;
    this.parameterValues[E_ParameterId.GPS_EHPE] = 50;

    this.parameterValues[E_ParameterId.GPS_CONVERGENCE] = 60;
    this.parameterValues[E_ParameterId.CONFIG_FLAGS] = {
      LedBlinksOnGPSFix:            false,
      BLEAdvertisingActive:         false,
      WiFiScanWhenGeolocStarts:     false,
      WiFiPayloadCyphered:          false,
      ConfigReqsAcknoledged:        false,
      DoubleShortButtonPressForSOS: false,
      LongButtonPressToSwitchOff:   false,
      FramePendingMechanismActive:  false,
    };
    this.parameterValues[E_ParameterId.TRANSMIT_STRAT] = E_Param_TransmitStrat.DUAL_FIXED.toString(10);
    this.parameterValues[E_ParameterId.BLE_BEACON_COUNT] = 1;
    this.parameterValues[E_ParameterId.BLE_BEACON_TIMEOUT] = 1;

    this.parameterValues[E_ParameterId.GPS_STANDBY_TIMEOUT] = 10;
    this.parameterValues[E_ParameterId.CONFIRMED_UL_BITMAP] = {
      FramePending:     false,
      Position:         false,
      EnergyStatus:     false,
      HeartBeat:        false,
      ActivityOrConfig: false,
      Shutdown:         false,
    };
    this.parameterValues[E_ParameterId.CONFIRMED_UL_RETRY] = 0;

    this.geolocSensorKeys = Object.keys(E_Param_GeolocSensor).filter(k => typeof E_Param_GeolocSensor[k as any] === 'string' );

    this.geolocMethodKeys = Object.keys(E_Param_GeolocMethod).filter(k => typeof E_Param_GeolocMethod[k as any] === 'string' );

    this.transmitStratKeys = Object.keys(E_Param_TransmitStrat).filter(k => typeof E_Param_TransmitStrat[k as any] === 'string' );

  }

  setParamEncode(): void {

    const params1 = [];
    let param: CPDU_Parameter;
    let strParamID: string;
    let paramID: number;
    let value1: number;

    if (this.selectedParameterIDs.value) {
      for (strParamID of this.selectedParameterIDs.value) {
        paramID = parseInt(strParamID, 10);
        if (paramID === E_ParameterId.CONFIRMED_UL_BITMAP ) {
          value1 = new CPDU_ParamConfirmedUlBitmap(this.parameterValues[paramID]);
        } else if (paramID === E_ParameterId.CONFIG_FLAGS ) {
          value1 = new CPDU_ParamConfigFlags(this.parameterValues[paramID]);
        } else {
          value1 = this.parameterValues[paramID];
        }
        try {
          param = new CPDU_Parameter({
            id: paramID,
            value: value1,
          });
        } catch (err) {
          this.setParamEncoded = err.message;
          return;
        }

        params1.push(param);
      }
    }

    try {
      const pdu = new DPDU_SetParam ({
        header: new CPDU_DlHeaderShort({
            type:     E_DPDUType.SET_PARAM,
            ackToken: this.setParamAckToken,
            optData:  0x0,
        }),
        params: params1,

      });
      this.setParamEncoded = pdu.toHexString();
    } catch (err) {
      this.setParamEncoded = err.message;
    }
  }

}
