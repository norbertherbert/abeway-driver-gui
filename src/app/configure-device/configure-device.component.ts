import { Component, OnInit } from '@angular/core';


// import {FormControl} from '@angular/forms';
import {

  CPDU_DlHeaderShort,
  CPDU_Parameter,
  CPDU_ParamConfigFlags,
  CPDU_ParamConfirmedUlBitmap,

  DPDU_SetMode,
  DPDU_SetParam,

  E_DPDUType, E_OperatingMode, E_ParameterId,

} from 'abeeway-driver';
// import { mapToMapExpression } from '@angular/compiler/src/render3/util';


import {

  GPS_TECHNOLOGIES,
  AGPS_TECHNOLOGIES,
  BLE_TECHNOLOGIES,
  WIFI_TECHNOLOGIES,
  ACCELEROMETER_OP_MODES,

  OPERATING_MODE,
  GEOLOC_SENSOR,
  GEOLOC_METHOD,
  TRANSMIT_STRAT,

  PARAMETERS,
} from '../../assets/params';


import {
  EXAMPLE_ACCURATE_ON_DEMAND,
  EXAMPLE_ACCURATE_DAILY_PERIODIC,
  EXAMPLE_MEDIUM_HOURLY_PERIODIC,
  EXAMPLE_ACCURATE_START_STOP,
  EXAMPLE_MOTION_TRACKING,
  EXAMPLE_PERMANENT_TRACKING,
} from '../../assets/example-configs';


@Component({
  selector: 'app-configure-device',
  templateUrl: './configure-device.component.html',
  styleUrls: ['./configure-device.component.css']
})
export class ConfigureDeviceComponent implements OnInit {

  EXAMPLE_ACCURATE_ON_DEMAND = EXAMPLE_ACCURATE_ON_DEMAND;
  EXAMPLE_ACCURATE_DAILY_PERIODIC = EXAMPLE_ACCURATE_DAILY_PERIODIC;
  EXAMPLE_MEDIUM_HOURLY_PERIODIC = EXAMPLE_MEDIUM_HOURLY_PERIODIC;
  EXAMPLE_ACCURATE_START_STOP = EXAMPLE_ACCURATE_START_STOP;
  EXAMPLE_MOTION_TRACKING = EXAMPLE_MOTION_TRACKING;
  EXAMPLE_PERMANENT_TRACKING = EXAMPLE_PERMANENT_TRACKING;

  OPERATING_MODE = OPERATING_MODE;
  GEOLOC_SENSOR = GEOLOC_SENSOR;
  GEOLOC_METHOD = GEOLOC_METHOD;
  TRANSMIT_STRAT = TRANSMIT_STRAT;
  PARAMETERS = PARAMETERS;

  OPERATING_MODE_DESCRIPTION = 'The device can operate according to one of the following six main operating modes.';
  GOTO_GEOLOC_TECHN_PARAMS = 'Please check and set parameters in the "3 Geolocation technology parameters" section too.';
  GOTO_MOTION_DETECT_PARAMS = 'Please check and set parameters in the "4 Motion detection parameters" section too.';

  periodicPosReportingON      = false;
  periodicActivityReportingON = false;
  shockDetectionON            = false;

  ackToken = Math.floor(Math.random() * 16);

  // parameters: {[k: string]: any} = {};

  selectedOperatingMode    = EXAMPLE_ACCURATE_START_STOP.opmode;
  parameters               = EXAMPLE_ACCURATE_START_STOP.multitechn;

  configCommands = '';

  constructor() { }

  ngOnInit() { }

  getKeys(obj: object): string[] {
    return Object.keys(obj);
  }

  loraPeriodUsed(): boolean {
    return PARAMETERS.LORA_PERIOD.relevantOpModes.includes(this.selectedOperatingMode);
  }
  ulPeriodUsed(): boolean {
    return PARAMETERS.UL_PERIOD.relevantOpModes.includes(this.selectedOperatingMode);
  }
  motionNbPosUsed(): boolean {
    return PARAMETERS.MOTION_NB_POS.relevantOpModes.includes(this.selectedOperatingMode);
  }
  geolocSensorUsed_(): boolean {
    return PARAMETERS.GEOLOC_SENSOR.relevantOpModes.includes(this.selectedOperatingMode);
  }
  bleRSSIFilterUsed(): boolean {
    return (this.parameters.geoloc_sensor === 'BLEGPS') || (this.parameters.geoloc_method === 'BLEGPS');
  }
  confirmedUlUsed(): boolean {
    return (
      this.parameters.confirmed_ul_bitmap.FramePending ||
      this.parameters.confirmed_ul_bitmap.Position ||
      this.parameters.confirmed_ul_bitmap.EnergyStatus ||
      this.parameters.confirmed_ul_bitmap.HeartBeat ||
      this.parameters.confirmed_ul_bitmap.ActivityConfigShock ||
      this.parameters.confirmed_ul_bitmap.Shutdown
    );
  }

  gpsUsed(): boolean {
    return (
      GPS_TECHNOLOGIES.includes(this.parameters.geoloc_sensor) ||
      GPS_TECHNOLOGIES.includes(this.parameters.geoloc_method)
    );
  }
  lpgpsUsed(): boolean {
    return (
      AGPS_TECHNOLOGIES.includes(this.parameters.geoloc_sensor) ||
      AGPS_TECHNOLOGIES.includes(this.parameters.geoloc_method)
    );
  }
  wifiUsed(): boolean {
    return (
      WIFI_TECHNOLOGIES.includes(this.parameters.geoloc_sensor) ||
      WIFI_TECHNOLOGIES.includes(this.parameters.geoloc_method) ||
      (
        this.parameters.config_flags.WiFiScanWhenGeolocStarts &&
        (this.gpsUsed() || this.lpgpsUsed() )
      )
    );
  }
  bleUsed(): boolean {
    return (
      BLE_TECHNOLOGIES.includes(this.parameters.geoloc_sensor) ||
      BLE_TECHNOLOGIES.includes(this.parameters.geoloc_method)
    );
  }
  accelerometerUsed_(): boolean {
    return ACCELEROMETER_OP_MODES.includes(this.selectedOperatingMode);
  }

  setDefaultConfig(cfg: string) {
    switch (cfg) {
      case 'EXAMPLE_ACCURATE_ON_DEMAND':
        this.selectedOperatingMode    = EXAMPLE_ACCURATE_ON_DEMAND.opmode;
        this.parameters               = EXAMPLE_ACCURATE_ON_DEMAND.multitechn;
        break;
      case 'EXAMPLE_ACCURATE_DAILY_PERIODIC':
        this.selectedOperatingMode    = EXAMPLE_ACCURATE_DAILY_PERIODIC.opmode;
        this.parameters               = EXAMPLE_ACCURATE_DAILY_PERIODIC.multitechn;
        break;
      case 'EXAMPLE_MEDIUM_HOURLY_PERIODIC':
        this.selectedOperatingMode    = EXAMPLE_MEDIUM_HOURLY_PERIODIC.opmode;
        this.parameters               = EXAMPLE_MEDIUM_HOURLY_PERIODIC.multitechn;
        break;
      case 'EXAMPLE_ACCURATE_START_STOP':
        this.selectedOperatingMode    = EXAMPLE_ACCURATE_START_STOP.opmode;
        this.parameters               = EXAMPLE_ACCURATE_START_STOP.multitechn;
        break;
      case 'EXAMPLE_MOTION_TRACKING':
        this.selectedOperatingMode    = EXAMPLE_MOTION_TRACKING.opmode;
        this.parameters               = EXAMPLE_MOTION_TRACKING.multitechn;
        break;
      case 'EXAMPLE_PERMANENT_TRACKING':
        this.selectedOperatingMode    = EXAMPLE_PERMANENT_TRACKING.opmode;
        this.parameters               = EXAMPLE_PERMANENT_TRACKING.multitechn;
        break;
    }
    this.periodicPosReportingON = (this.parameters.periodic_pos_period > 0);
    this.periodicActivityReportingON = (this.parameters.periodic_activity_period > 0);
    this.shockDetectionON = (this.parameters.shock_detection > 0);
  }

  generateConfigCommands(): void {

    let setModeCmd: DPDU_SetMode;
    const params: CPDU_Parameter[] = [];
    let paramsChunk: CPDU_Parameter[];
    let param: CPDU_Parameter;
    let setParamCmd: DPDU_SetParam;
    let configCommands = '';
    let errorMessages = '';


    // 1 MAIN OPERATING MODE

    // Set Operating Mode
    setModeCmd = new DPDU_SetMode ({
      header: new CPDU_DlHeaderShort({
        type: E_DPDUType.SET_MODE,
        ackToken: this.ackToken,
      }),
      mode: OPERATING_MODE[this.selectedOperatingMode].code,
    });


    if (this.loraPeriodUsed()) {

      // lora_period
      try {
        param = new CPDU_Parameter({
          id: PARAMETERS.LORA_PERIOD.code,
          value: +this.parameters.lora_period,
        });
        params.push(param);
      } catch (err) {
        errorMessages += '    - ' + err.message + '\n';
      }

    }

    if (this.ulPeriodUsed()) {

      // ul_period
      try {
        param = new CPDU_Parameter({
          id: PARAMETERS.UL_PERIOD.code,
          value: +this.parameters.ul_period,
        });
        params.push(param);
      } catch (err) {
        errorMessages += '    - ' + err.message + '\n';
      }

    }

    if (this.motionNbPosUsed()) {

      // motion_nb_pos
      try {
        param = new CPDU_Parameter({
          id: PARAMETERS.MOTION_NB_POS.code,
          value: +this.parameters.motion_nb_pos,
        });
        params.push(param);
      } catch (err) {
        errorMessages += '    - ' + err.message + '\n';
      }

    }

    // geoloc_sensor
    // (always used for SOS mode)
    try {
      param = new CPDU_Parameter({
        id: PARAMETERS.GEOLOC_SENSOR.code,
        value: GEOLOC_SENSOR[this.parameters.geoloc_sensor].code,
      });
      params.push(param);
    } catch (err) {
      errorMessages += '    - ' + err.message + '\n';
    }


    // 2 SIDE OPERATIONS

    // periodic_pos_period
    try {
      param = new CPDU_Parameter({
        id: PARAMETERS.PERIODIC_POS_PERIOD.code,
        value: this.periodicPosReportingON ? +this.parameters.periodic_pos_period : 0,
      });
      params.push(param);
    } catch (err) {
      errorMessages += '    - ' + err.message + '\n';
    }

    // periodic_activity_period
    try {
      param = new CPDU_Parameter({
        id: PARAMETERS.PERIODIC_ACTIVITY_PERIOD.code,
        value: this.periodicActivityReportingON ? +this.parameters.periodic_activity_period : 0,
      });
      params.push(param);
    } catch (err) {
      errorMessages += '    - ' + err.message + '\n';
    }

    // shock_detection
    try {
      param = new CPDU_Parameter({
        id: PARAMETERS.SHOCK_DETECTION.code,
        value: this.shockDetectionON ? +this.parameters.shock_detection : 0,
      });
      params.push(param);
    } catch (err) {
      errorMessages += '    - ' + err.message + '\n';
    }

    // geoloc_method
    // (always used for position on demand)
    try {
      param = new CPDU_Parameter({
        id: PARAMETERS.GEOLOC_METHOD.code,
        value: GEOLOC_METHOD[this.parameters.geoloc_method].code,
      });
      params.push(param);
    } catch (err) {
      errorMessages += '    - ' + err.message + '\n';
    }


    // 3 GEOLOC TECHNOLOGY

    if (this.gpsUsed()) {

      // gps_timeout
      try {
        param = new CPDU_Parameter({
          id: PARAMETERS.GPS_TIMEOUT.code,
          value: +this.parameters.gps_timeout,
        });
        params.push(param);
      } catch (err) {
        errorMessages += '    - ' + err.message + '\n';
      }

      // gps_convergence
      try {
        param = new CPDU_Parameter({
          id: PARAMETERS.GPS_CONVERGENCE.code,
          value: +this.parameters.gps_convergence,
        });
        params.push(param);
      } catch (err) {
        errorMessages += '    - ' + err.message + '\n';
      }

      // gps_standby_timeout
      try {
        param = new CPDU_Parameter({
          id: PARAMETERS.GPS_STANDBY_TIMEOUT.code,
          value: +this.parameters.gps_standby_timeout,
        });
        params.push(param);
      } catch (err) {
        errorMessages += '    - ' + err.message + '\n';
      }

      // gps_ehpe
      try {
        param = new CPDU_Parameter({
          id: PARAMETERS.GPS_EHPE.code,
          value: +this.parameters.gps_ehpe,
        });
        params.push(param);
      } catch (err) {
        errorMessages += '    - ' + err.message + '\n';
      }

    }

    if (this.lpgpsUsed()) {

      // agps_timeout
      try {
        param = new CPDU_Parameter({
          id: PARAMETERS.AGPS_TIMEOUT.code,
          value: +this.parameters.agps_timeout,
        });
        params.push(param);
      } catch (err) {
        errorMessages += '    - ' + err.message + '\n';
      }

    }

    if (this.bleUsed()) {

      // ble_beacon_count
      try {
        param = new CPDU_Parameter({
          id: PARAMETERS.BLE_BEACON_COUNT.code,
          value: +this.parameters.ble_beacon_count,
        });
        params.push(param);
      } catch (err) {
        errorMessages += '    - ' + err.message + '\n';
      }

      // ble_beacon_timeout
      try {
        param = new CPDU_Parameter({
          id: PARAMETERS.BLE_BEACON_TIMEOUT.code,
          value: +this.parameters.ble_beacon_timeout,
        });
        params.push(param);
      } catch (err) {
        errorMessages += '    - ' + err.message + '\n';
      }


      if (this.bleRSSIFilterUsed()) {

        // ble_rssi_filter
        try {
          param = new CPDU_Parameter({
            id: PARAMETERS.BLE_RSSI_FILTER.code,
            value: +this.parameters.ble_rssi_filter,
          });
          params.push(param);
        } catch (err) {
          errorMessages += '    - ' + err.message + '\n';
        }

      }

    }


    // 4 MOTION DETECTION

    // motion_sensitivity
    // (always used for motion bit in header)
    try {
      param = new CPDU_Parameter({
        id: PARAMETERS.MOTION_SENSITIVITY.code,
        value: +this.parameters.motion_sensitivity,
      });
      params.push(param);
    } catch (err) {
      errorMessages += '    - ' + err.message + '\n';
    }

    // motion_duration
    // (always used for motion bit in header)
    try {
      param = new CPDU_Parameter({
        id: PARAMETERS.MOTION_DURATION.code,
        value: +this.parameters.motion_duration,
      });
      params.push(param);
    } catch (err) {
      errorMessages += '    - ' + err.message + '\n';
    }


    // 5 DEVICE I/O

    // config_flags
    try {
      param = new CPDU_Parameter({
        id: PARAMETERS.CONFIG_FLAGS.code,
        value: new CPDU_ParamConfigFlags(this.parameters.config_flags),
      });
      params.push(param);
    } catch (err) {
      errorMessages += '    - ' + err.message + '\n';
    }

    // confirmed_ul_bitmap
    try {
      param = new CPDU_Parameter({
        id: PARAMETERS.CONFIRMED_UL_BITMAP.code,
        value: new CPDU_ParamConfirmedUlBitmap(this.parameters.confirmed_ul_bitmap),
      });
      params.push(param);
    } catch (err) {
      errorMessages += '    - ' + err.message + '\n';
    }

    // confirmed_ul_retry
    try {
      param = new CPDU_Parameter({
        id: PARAMETERS.CONFIRMED_UL_RETRY.code,
        value: +this.parameters.confirmed_ul_retry,
      });
      params.push(param);
    } catch (err) {
      errorMessages += '    - ' + err.message + '\n';
    }

    // transmit_strat
    try {
      param = new CPDU_Parameter({
        id: PARAMETERS.TRANSMIT_STRAT.code,
        value: TRANSMIT_STRAT[this.parameters.transmit_strat].code,
      });
      params.push(param);
    } catch (err) {
      errorMessages += '    - ' + err.message + '\n';
    }


    // MISCELLANEOUS

    // pw_stat_period
    try {
      param = new CPDU_Parameter({
        id: 0x02, // PARAMETERS.PW_STAT_PERIOD.code,
        value: +this.parameters.pw_stat_period,
      });
      params.push(param);
    } catch (err) {
      errorMessages += '    - ' + err.message + '\n';
    }



    if (errorMessages !== '') {
      configCommands += '\nErrors:\n\n' + errorMessages;
    }


    configCommands += '\nSet Operating Mode command:';
    configCommands += '\n\n    ' + setModeCmd.toHexString();
    configCommands += '\n\n        ' + E_OperatingMode[setModeCmd.mode];


    const l = params.length;
    for (let i = 0; i * 5 < l; i++) {
      paramsChunk = params.slice(i * 5, (i + 1) * 5 );
      setParamCmd = new DPDU_SetParam ({
        header: new CPDU_DlHeaderShort({
          type:     E_DPDUType.SET_PARAM,
          ackToken: this.ackToken,
          optData:  0x0,
        }),
        params: paramsChunk,
      });

      configCommands += '\n\nSet Parameters command #' + ( i + 1 ) + ':';
      configCommands += '\n\n    ' + setParamCmd.toHexString() + '\n';
      for (param of setParamCmd.params ) {
        if ((param.id !== E_ParameterId.CONFIG_FLAGS) && (param.id !== E_ParameterId.CONFIRMED_UL_BITMAP)) {
          configCommands += '\n        ' + E_ParameterId[param.id] + ' = ' + param.value;
        } else {
          configCommands += '\n        ' + E_ParameterId[param.id] + ' = ' + param.value.toValue();
        }
      }
    }

    configCommands += '\n';


    this.configCommands = configCommands;

  }

}
