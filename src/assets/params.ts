

export const GPS_TECHNOLOGIES = [
    // 'WiFi',
    'GPS',
    'LPGPS',
    'WiFiGPS',
    'WiFiLPGPS',
    // 'BLE',
    'BLEGPS',
    'WiFiLPGPSGPS',
    'WiFiLPGPS_WiFiGPS_WiFiLPGPS',
];

export const AGPS_TECHNOLOGIES = [
    // 'WiFi',
    // 'GPS',
    'LPGPS',
    // 'WiFiGPS',
    'WiFiLPGPS',
    // 'BLE',
    // 'BLEGPS',
    'WiFiLPGPSGPS',
    'WiFiLPGPS_WiFiGPS_WiFiLPGPS',
];

export const BLE_TECHNOLOGIES = [
    // 'WiFi',
    // 'GPS',
    // 'LPGPS',
    // 'WiFiGPS',
    // 'WiFiLPGPS',
    'BLE',
    'BLEGPS',
    // 'WiFiLPGPSGPS',
    // 'WiFiLPGPS_WiFiGPS_WiFiLPGPS',
];

export const WIFI_TECHNOLOGIES = [
    'WiFi',
    // 'GPS',
    // 'LPGPS',
    'WiFiGPS',
    'WiFiLPGPS',
    // 'BLE',
    // 'BLEGPS',
    'WiFiLPGPSGPS',
    'WiFiLPGPS_WiFiGPS_WiFiLPGPS',
];

export const ACCELEROMETER_OP_MODES = [
// 'STANDBY',
'MOTION_TRACKING',
// 'PERMANENT_TRACKING',
'START_END_TRACKING',
'ACTIVITY_MONITORING',
// 'OFF',
];




export const OPERATING_MODE = {
    // _UNDEFINED: {
    //   code: undefined,
    //   title: '',
    //   description: 'The device can operate according to one of the following six main operating modes.',
    // },
    STANDBY: {
      code: 0x00,
      title: 'Standby',
      description: 'Lora heartbeat only',
    },
    MOTION_TRACKING: {
      code: 0x01,
      title: 'Motion tracking',
      description: 'Get the tracker position at a given cycle when motion is detected.',
    },
    PERMANENT_TRACKING: {
      code: 0x02,
      title: 'Permanent tracking',
      description: 'Get permanently a position of the tracker.',
    },
    START_END_TRACKING: {
      code: 0x03,
      title: 'Start-end tracking',
      description: 'Get position messages during motion start and end events.',
    },
    ACTIVITY_MONITORING: {
      code: 0x04,
      title: 'Activity monitoring',
      description: 'Monitor activity rate with embedded accelerometer.',
    },
    OFF: {
      code: 0x05,
      title: 'Off',
      description: 'device stopped',
    },
  };


export const GEOLOC_SENSOR = {
    // _UNDEFINED: {
    //   code: undefined,
    //   title: '',
    //   description: 'The device can use one of the following 9 geolocation technologies in MAIN operating modes.',
    // },
    WiFi: {
    code: 0x00,
    title: 'WiFi',
    description: 'WiFi scan only',
    },
    GPS: {
    code: 0x01,
    title: 'GPS',
    description: 'GPS only',
    },
    LPGPS: {
    code: 0x02,
    title: 'LPGPS',
    description: 'Low Power GPS (LPGPS) only',
    },
    WiFiGPS: {
    code: 0x06,
    title: 'WiFi-GPS',
    description: 'WIFI-GPS only (WIFI then GPS if WIFI fails in one geolocation cycle)',
    },
    WiFiLPGPS: {
    code: 0x07,
    title: 'WiFi-LPGPS',
    description: 'WIFI-LPGPS only (WIFI then LPGPS if WIFI fails in one geolocation cycle)',
    },
    BLE: {
    code: 0x0a,
    title: 'BLE',
    description: 'BLE scan only',
    },
    BLEGPS: {
    code: 0x0b,
    title: 'BLE-GPS',
    description: 'BLE-GPS only (BLE then GPS if BLE fails in one geolocation cycle)',
    },
    WiFiLPGPSGPS: {
    code: 0x05,
    title: 'WiFi-LPGPS-GPS',
    description: 'Multimode (WIFI + low power-GPS + GPS with reset to WIFI on timeout). Superseded by mode 9.'
    },
    WiFiLPGPS_WiFiGPS_WiFiLPGPS: {
    code: 0x09,
    title: 'WiFi-LPGPS, WiFi-GPS, WiFi-LPGPS',
    description: 'WIFI-LPGPS first, then WIFI-GPS until timeout, then back to WIFI-LPGPS'
    },
};

export const GEOLOC_METHOD = {
    // _UNDEFINED: {
    //   code: undefined,
    //   title: '',
    //   description: 'The device can use one of the following 7 geolocation technologies in SIDE operating modes.',
    // },
    WiFi: {
    code: 0x00,
    title: 'WiFi',
    description: 'WiFi scan only',
    },
    GPS: {
    code: 0x01,
    title: 'GPS',
    description: 'GPS only',
    },
    LPGPS: {
    code: 0x02,
    title: 'LPGPS',
    description: 'Low Power GPS (LPGPS) only',
    },
    WiFiGPS: {
    code: 0x03,
    title: 'WiFi-GPS',
    description: 'WIFI-GPS only (WIFI then GPS if WIFI fails in one geolocation cycle)',
    },
    WiFiLPGPS: {
    code: 0x04,
    title: 'WIFI-LPGPS',
    description: 'WIFI-LPGPS only (WIFI then LPGPS if WIFI fails in one geolocation cycle)',
    },
    BLE: {
    code: 0x05,
    title: 'BLE',
    description: 'BLE scan only',
    },
    BLEGPS: {
    code: 0x06,
    title: 'BLE-GPS',
    description: 'BLE-GPS only (BLE then GPS if BLE fails in one geolocation cycle)',
    },
};

export const TRANSMIT_STRAT = {
    // _UNDEFINED: {
    //   code: undefined,
    //   title: '',
    //   description: 'Each transmission is managed according to this parameter',
    // },
    SINGLE_FIXED: {
    code: 0x00,
    title: 'Single fixed',
    description: 'Single transmission using a fixed data rate: SF10 (Value provisioned in the device in the factory)',
    },
    SINGLE_RANDOM: {
    code: 0x01,
    title: 'Single random',
    description: 'Single transmission using a random data rate within [SF7-SF12].',
    },
    DUAL_RANDOM: {
    code: 0x02,
    title: 'Dual random',
    description: 'Double transmissions: ' +
                'First transmission using a random data rate within [SF7-SF8]. ' +
                'Second transmission using a random data rate within [SF9-SF12].',
    },
    DUAL_FIXED: {
    code: 0x03,
    title: 'Dual fixed',
    description: 'Double transmissions: ' +
                'First transmission using a random data rate within [SF7-SF8]. ' +
                'Second transmission using a fixed data rate: SF10',
    },
    NETWORK_ADR: {
    code: 0x04,
    title: 'Network ADR',
    description: 'Single transmission using network ADR (Adaptive Data Rate)',
    },
};

export const PARAMETERS = {
    UL_PERIOD: {
        code: 0x00,
        title: 'Period of position or activity reports (ul_period)',
        unit: 's', min: 60, max: 86400,
        description: 'Period of position or activity messages in motion, start/end, activity or permanent operating mode. [60..86400 s]',
        relevantOpModes: [
        'STANDBY',
        'MOTION_TRACKING',
        'PERMANENT_TRACKING',
        'START_END_TRACKING',
        'ACTIVITY_MONITORING',
        // 'OFF',
        ]
    },
    LORA_PERIOD: {
        code: 0x01,
        title: 'Period of LoRa heartbeat messages (lora_period)',
        unit: 's', min: 300, max: 86400,
        description: 'Period of LoRa heartbeat messages. [300..86400 s]',
        relevantOpModes: [
        // 'STANDBY',
        'MOTION_TRACKING',
        'PERMANENT_TRACKING',
        'START_END_TRACKING',
        'ACTIVITY_MONITORING',
        // 'OFF',
        ]
    },
    PW_STAT_PERIOD: {
        code: 0x02,
        title: 'Period of energy status report. (pw_stat_period)',
        unit: 's', min: 300,  max: 604800,
        description: 'Period of energy status reports. When 0, no status report is sent. ' +
                    '(Not used for micro trackers, should be set to 0) [0, 300..60480 s]',
    },
    PERIODIC_POS_PERIOD: {
        code: 0x03,
        title: 'Period of position reports for "Periodic position reporting". (periodic_pos_period)',
        unit: 's', min: 900, max: 604800,
        description: 'Period of the periodic position report. When set to 0, the reporting is disabled. [0, 900..60480 s]',
    },
    GEOLOC_SENSOR: {
        code: 0x05,
        title: 'Applied geolocation technology (geoloc_sensor)',
        unit: '', min: 0x00, max: 0x0b,
        description: 'Geolocation sensor profile used in main operating mode and SOS mode.',
        relevantOpModes: [
        // 'STANDBY',
        'MOTION_TRACKING',
        'PERMANENT_TRACKING',
        'START_END_TRACKING',
        // 'ACTIVITY_MONITORING',
        // 'OFF',
        ]
    }, // E_Param_GeolocSensor
    GEOLOC_METHOD: {
        code: 0x06,
        title: 'Applied geolocation technology for side operations (geoloc_method)',
        unit: '', min: 0x00, max: 0x06,
        description: 'Geolocation policy used for the side operating modes.',
    }, // E_Param_GeolocMethod
    MOTION_NB_POS: {
        code: 0x08,
        title: 'Number position reports after movenent started. (motion_nb_pos)',
        unit: '', min: 1, max: 60,
        description: 'Number of positions to report during motion events. ' +
                    '(Applicable for \'Start-end tracking\' oparation mode only.) [1..60]',
        relevantOpModes: [
        // 'STANDBY',
        // 'MOTION_TRACKING',
        // 'PERMANENT_TRACKING',
        'START_END_TRACKING',
        // 'ACTIVITY_MONITORING',
        // 'OFF',
        ]
    },
    GPS_TIMEOUT: {
        code: 0x09,
        title: 'GPS timeout (gps_timeout)',
        unit: 's', min: 30, max: 300,
        description: 'Timeout for GPS scans before sending a GPS timeout message. [30..300 s]',
    },
    AGPS_TIMEOUT: {
        code: 0x0a,
        title: 'LPGPS timeout (agps_timeout)',
        unit: 's', min: 30, max: 250,
        description: 'Timeout for LPGPS scans before sending a GPS timeout message. [30..250 s]',
    },
    GPS_EHPE: {
        code: 0x0b,
        title: 'Acceptable Horizontal Positioning Error (gps_ehpe)',
        unit: 's', min: 0, max: 100,
        description: 'Acceptable GPS Horizontal Positioning Error [0..100 m]',
    },
    GPS_CONVERGENCE: {
        code: 0x0c,
        title: 'GPS concergence time (gps_convergence)',
        unit: 's', min: 0, max: 300,
        description: 'Time let to the GPS module to refine the calculated position. [0..300 s]',
    },
    CONFIG_FLAGS: {
        code: 0x0d,
        title: 'config_flags',
        unit: '',  min: 0x0000, max: 0x0fff,
        description: 'Configuration flags.',
    }, // Param_ConfigFlags
    TRANSMIT_STRAT: {
        code: 0x0e,
        title: 'LoRa transmit strategy in motion. (transmit_strat)',
        unit: '',  min: 0x00, max: 0x04,
        description: 'LoRa transmit strategy in motion. (If not in motion always ADR is used.) [0x00..0x04]',
    }, // E_Param_TransmitStrat (0-4)
    BLE_BEACON_COUNT: {
        code: 0x0f,
        title: 'Max. num. of BLE beacons to report. (ble_beacon_count)',
        unit: '', min: 1, max: 4,
        description: 'Maximum number of BLE beacons to report. [1..4]',
    },
    BLE_BEACON_TIMEOUT: {
        code: 0x10,
        title: 'BLE scan duration. (ble_beacon_timeout)',
        unit: 's', min: 1, max: 5,
        description: 'BLE scan duration. [1..5 s]',
    },
    GPS_STANDBY_TIMEOUT: {
        code: 0x11,
        title: 'GPS standby timeout (gps_standby_timeout)',
        unit: 's', min: 0, max: 28800,
        description: 'Duration of GPS standby mode before going OFF. When 0, no standby timeout is applied. [0..28800 s]',
    },
    CONFIRMED_UL_BITMAP: {
        code: 0x12,
        title: 'confirmed_ul_bitmap',
        unit: '', min: 0x0000, max: 0xffff,
        description: 'Bitmap enabling the LoRa confirmation of specific type of uplink message. [0x0000..0xffff]',
    }, // E_Param_UlBitmap
    CONFIRMED_UL_RETRY: {
        code: 0x13,
        title: 'The max. num. of retries for each confirmed uplink (confirmed_ul_retry)',
        unit: '', min: 0, max: 8,
        description: 'The number of retries for each confirmed uplink when the confirmation is not received. [0..8]',
    },
    MOTION_SENSITIVITY: {
        code: 0x14,
        title: 'Accelerometer sensitivity (motion_sensitivity)',
        unit: '%', min: 0, max: 100,
        description: 'Accelerometer configuration. 0 is default configuration. ' +
                    '1-100 configures the accelerometer sensitivity from 1 to 100% [0..100 %]',
    },
    SHOCK_DETECTION: {
        code: 0x15,
        title: 'Shock detection sensitivity (shock_detection)',
        unit: '%', min: 0, max: 100,
        description: 'This parameter provides the configuration of the sensitivity of the shock detection from 1 to 100% ' +
                    'A value of 0 disables the shock detection. Note: When enabled, the motion_sensitivity parameter must ' +
                    'be set to a non-zero value and SHOCK_DETECTION should be strictly less than MOTION_SENSITIVITY [0..100 %]',
    },
    PERIODIC_ACTIVITY_PERIOD:  {
        code: 0x16,
        title: 'Period of activity reports for "Periodic activity reporting". (periodic_activity_period)',
        unit: 's', min: 1800, max: 86400,
        description: 'Period of the periodic activity report. ' +
                    'The value must be a multiple of 6. When set to 0, the reporting is disabled. [1800..86400 s]',
    },
    MOTION_DURATION: {
        code: 0x17,
        title: 'Period required to detect the end of a motion. (motion_duration)',
        unit: 's', min: 60, max: 3600,
        description: 'Period required to detect the end of a motion. [60..3600 s]',
    },
    BLE_RSSI_FILTER: {
        code: 0x1a,
        title: 'BLE RSSI filter (ble_rssi_filter)',
        unit: 'dBm', min: -100, max: -40,
        description: 'RSSI value to filter BLE beacons with BLE-GPS geolocation mode. [-100..-40 dBm]',
    },
    BLE_VERSION: {
        code: 0xfd,
        title: 'ble_version',
        unit: '', min: 0, max: 0,
        description: 'Get the BLE version.',
    },
    FIRMWARE_VERSION: {
        code: 0xfe,
        title: 'firmware_version',
        name: 'FIRMWARE_VERSION',
        unit: '', min: 0, max: 0,
        description: 'Get the firmware version.',
    },
};
