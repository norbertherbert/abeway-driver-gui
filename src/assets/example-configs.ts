
// PROFILE 1
const _ACCURATE_ON_DEMAND = {
    basicParams: {
        lora_period:                      600,
        ul_period:                        120,

        periodic_pos_period:              0,
        pw_stat_period:                   0, // TODO
        gps_timeout:                      300,
        agps_timeout:                     55,
        motion_nb_pos:                    3,
        motion_duration:                  120,
        gps_ehpe:                         5,
        gps_convergence:                  180,
        config_flags: {                   // 0x1F
            AsymmetricBLEPairingRejected: false,
            NewJoinReqOnLeavingOffMode:   false,
            MotionEndMessageEnabled:      false,
            MotionStartMessageEnabled:    false,
            LedBlinksOnGPSFix:            false,
            BLEAdvertisingActive:         false,
            WiFiScanWhenGeolocStarts:     '', // set to '' in case it is false
            WiFiPayloadCyphered:          true,
            ConfigReqsAcknoledged:        true,
            DoubleShortButtonPressForSOS: 'true', // set to '' in case it is false
            LongButtonPressToSwitchOff:   true,
            FramePendingMechanismActive:  true,
        },
        transmit_strat:                   'DUAL_RANDOM',
        periodic_activity_period:         0,
        ble_beacon_count:                 4,
        ble_beacon_timeout:               3,
        gps_standby_timeout:              1200, // 20 min
        confirmed_ul_bitmap: {            // 0x00
            FramePending:                 false,
            Position:                     false,
            EnergyStatus:                 false,
            HeartBeat:                    false,
            ActivityConfigShock:          false,
            Shutdown:                     false,
        },
        confirmed_ul_retry:               3,
        motion_sensitivity:               0,
        shock_detection:                  0,
        ble_rssi_filter:                  -100,
    },
    outdoorGeolocParams: {
        geoloc_sensor:                    'GPS',
        geoloc_method:                    'GPS',
    },
    multitechnGeolocParams: {
        geoloc_sensor:                    'WiFiGPS',
        geoloc_method:                    'WiFiGPS',
    },
    indoorGeolocParams: {
        geoloc_sensor:                    'BLE',
        geoloc_method:                    'BLE',
    },
};

export const EXAMPLE_ACCURATE_ON_DEMAND = {
    title: 'Accurate on demand positioning',
    description: 'Use case: Long battery lifetime, few accurate positions.',
    opmode: 'STANDBY',
    outdoor: { ..._ACCURATE_ON_DEMAND.basicParams, ..._ACCURATE_ON_DEMAND.outdoorGeolocParams },
    multitechn: { ..._ACCURATE_ON_DEMAND.basicParams, ..._ACCURATE_ON_DEMAND.multitechnGeolocParams },
    indoor: { ..._ACCURATE_ON_DEMAND.basicParams, ..._ACCURATE_ON_DEMAND.indoorGeolocParams },
};



// PROFILE 2
const _ACCURATE_DAILY_PERIODIC = {
    basicParams: {
        lora_period:                      600,
        ul_period:                        120,

        periodic_pos_period:              86400, // 1 day
        pw_stat_period:                   0, // TODO
        gps_timeout:                      300,
        agps_timeout:                     55,
        motion_nb_pos:                    3,
        motion_duration:                  120,
        gps_ehpe:                         5,
        gps_convergence:                  180,
        config_flags: {                   // 0x1F
            AsymmetricBLEPairingRejected: false,
            NewJoinReqOnLeavingOffMode:   false,
            MotionEndMessageEnabled:      false,
            MotionStartMessageEnabled:    false,
            LedBlinksOnGPSFix:            false,
            BLEAdvertisingActive:         false,
            WiFiScanWhenGeolocStarts:     '', // set to '' in case it is false
            WiFiPayloadCyphered:          true,
            ConfigReqsAcknoledged:        true,
            DoubleShortButtonPressForSOS: 'true', // set to '' in case it is false
            LongButtonPressToSwitchOff:   true,
            FramePendingMechanismActive:  true,
        },
        transmit_strat:                   'DUAL_RANDOM',
        periodic_activity_period:         0,
        ble_beacon_count:                 4,
        ble_beacon_timeout:               3,
        gps_standby_timeout:              0,
        confirmed_ul_bitmap: {            // 0x00
            FramePending:                 false,
            Position:                     false,
            EnergyStatus:                 false,
            HeartBeat:                    false,
            ActivityConfigShock:          false,
            Shutdown:                     false,
        },
        confirmed_ul_retry:               3,
        motion_sensitivity:               0,
        shock_detection:                  0,
        ble_rssi_filter:                  -100,
    },
    outdoorGeolocParams: {
        geoloc_sensor:                    'GPS',
        geoloc_method:                    'GPS',
    },
    multitechnGeolocParams: {
        geoloc_sensor:                    'WiFiGPS',
        geoloc_method:                    'WiFiGPS',
    },
    indoorGeolocParams: {
        geoloc_sensor:                    'BLE',
        geoloc_method:                    'BLE',
    },
};

export const EXAMPLE_ACCURATE_DAILY_PERIODIC = {
    title: 'Accurate Daily periodic position',
    description: 'Use case: few periodic accurate positions.',
    opmode: 'STANDBY',
    outdoor: { ..._ACCURATE_DAILY_PERIODIC.basicParams, ..._ACCURATE_DAILY_PERIODIC.outdoorGeolocParams },
    multitechn: { ..._ACCURATE_DAILY_PERIODIC.basicParams, ..._ACCURATE_DAILY_PERIODIC.multitechnGeolocParams },
    indoor: { ..._ACCURATE_DAILY_PERIODIC.basicParams, ..._ACCURATE_DAILY_PERIODIC.indoorGeolocParams },
};



// PROFILE 3
const _MEDIUM_HOURLY_PERIODIC = {
    basicParams: {
        lora_period:                      600,
        ul_period:                        120,

        periodic_pos_period:              3600, // 1 hour
        pw_stat_period:                   0, // TODO
        gps_timeout:                      300,
        agps_timeout:                     55,
        motion_nb_pos:                    3,
        motion_duration:                  120,
        gps_ehpe:                         10,
        gps_convergence:                  90,
        config_flags: {                   // 0x1F
            AsymmetricBLEPairingRejected: false,
            NewJoinReqOnLeavingOffMode:   false,
            MotionEndMessageEnabled:      false,
            MotionStartMessageEnabled:    false,
            LedBlinksOnGPSFix:            false,
            BLEAdvertisingActive:         false,
            WiFiScanWhenGeolocStarts:     '', // set to '' in case it is false
            WiFiPayloadCyphered:          true,
            ConfigReqsAcknoledged:        true,
            DoubleShortButtonPressForSOS: 'true', // set to '' in case it is false
            LongButtonPressToSwitchOff:   true,
            FramePendingMechanismActive:  true,
        },
        transmit_strat:                   'DUAL_RANDOM',
        periodic_activity_period:         0,
        ble_beacon_count:                 4,
        ble_beacon_timeout:               3,
        gps_standby_timeout:              3605, // 1 hour + 5s
        confirmed_ul_bitmap: {            // 0x00
            FramePending:                 false,
            Position:                     false,
            EnergyStatus:                 false,
            HeartBeat:                    false,
            ActivityConfigShock:          false,
            Shutdown:                     false,
        },
        confirmed_ul_retry:               3,
        motion_sensitivity:               0,
        shock_detection:                  0,
        ble_rssi_filter:                  -100,
    },
    outdoorGeolocParams: {
        geoloc_sensor:                    'GPS',
        geoloc_method:                    'GPS',
    },
    multitechnGeolocParams: {
        geoloc_sensor:                    'WiFiGPS',
        geoloc_method:                    'WiFiGPS',
    },
    indoorGeolocParams: {
        geoloc_sensor:                    'WIFI',
        geoloc_method:                    'WIFI',
    },
};

export const EXAMPLE_MEDIUM_HOURLY_PERIODIC = {
    title: 'Hourly periodic position with medium accuracy',
    description: 'Use case: periodic medium accurate positions.',
    opmode: 'STANDBY',
    outdoor: { ..._MEDIUM_HOURLY_PERIODIC.basicParams, ..._MEDIUM_HOURLY_PERIODIC.outdoorGeolocParams },
    multitechn: { ..._MEDIUM_HOURLY_PERIODIC.basicParams, ..._MEDIUM_HOURLY_PERIODIC.multitechnGeolocParams },
    indoor: { ..._MEDIUM_HOURLY_PERIODIC.basicParams, ..._MEDIUM_HOURLY_PERIODIC.indoorGeolocParams },
};



// PROFILE 4
const _ACCURATE_START_STOP = {
    basicParams: {
        lora_period:                      600,
        ul_period:                        90,

        periodic_pos_period:              0,
        pw_stat_period:                   0, // TODO
        gps_timeout:                      180,
        agps_timeout:                     55,
        motion_nb_pos:                    3,
        motion_duration:                  120,
        gps_ehpe:                         5,
        gps_convergence:                  90,
        config_flags: {                   // 0x0B1F
            AsymmetricBLEPairingRejected: true,
            NewJoinReqOnLeavingOffMode:   false,
            MotionEndMessageEnabled:      true,
            MotionStartMessageEnabled:    true,
            LedBlinksOnGPSFix:            false,
            BLEAdvertisingActive:         false,
            WiFiScanWhenGeolocStarts:     '', // set to '' in case it is false
            WiFiPayloadCyphered:          true,
            ConfigReqsAcknoledged:        true,
            DoubleShortButtonPressForSOS: 'true', // set to '' in case it is false
            LongButtonPressToSwitchOff:   true,
            FramePendingMechanismActive:  true,
        },
        transmit_strat:                   'DUAL_RANDOM',
        periodic_activity_period:         0,
        ble_beacon_count:                 4,
        ble_beacon_timeout:               3,
        gps_standby_timeout:              7200,
        confirmed_ul_bitmap: {            // 0x00
            FramePending:                 false,
            Position:                     false,
            EnergyStatus:                 false,
            HeartBeat:                    false,
            ActivityConfigShock:          false,
            Shutdown:                     false,
        },
        confirmed_ul_retry:               3,
        motion_sensitivity:               0,
        shock_detection:                  0,
        ble_rssi_filter:                  -100,
    },
    outdoorGeolocParams: {
        geoloc_sensor:                    'GPS',
        geoloc_method:                    'GPS',
    },
    multitechnGeolocParams: {
        geoloc_sensor:                    'WiFiGPS',
        geoloc_method:                    'WiFiGPS',
    },
    indoorGeolocParams: {
        geoloc_sensor:                    'BLE',
        geoloc_method:                    'BLE',
    },
};

export const EXAMPLE_ACCURATE_START_STOP = {
    title: 'Accurate positions at start and stop of moving',
    description: 'Use case: Accurate positions sent at the beginning and the end of a motion.',
    opmode: 'START_END_TRACKING',
    outdoor: { ..._ACCURATE_START_STOP.basicParams, ..._ACCURATE_START_STOP.outdoorGeolocParams },
    multitechn: { ..._ACCURATE_START_STOP.basicParams, ..._ACCURATE_START_STOP.multitechnGeolocParams },
    indoor: { ..._ACCURATE_START_STOP.basicParams, ..._ACCURATE_START_STOP.indoorGeolocParams },
};



// PROFILE 5
const _MOTION_TRACKING = {
    basicParams: {
        lora_period:                      600,
        ul_period:                        120,

        periodic_pos_period:              0,
        pw_stat_period:                   0, // TODO
        gps_timeout:                      180,
        agps_timeout:                     55,
        motion_nb_pos:                    3,
        motion_duration:                  120,
        gps_ehpe:                         10,
        gps_convergence:                  120,
        config_flags: {                   // 0x1F
            AsymmetricBLEPairingRejected: false,
            NewJoinReqOnLeavingOffMode:   false,
            MotionEndMessageEnabled:      false,
            MotionStartMessageEnabled:    false,
            LedBlinksOnGPSFix:            false,
            BLEAdvertisingActive:         false,
            WiFiScanWhenGeolocStarts:     '', // set to '' in case it is false
            WiFiPayloadCyphered:          true,
            ConfigReqsAcknoledged:        true,
            DoubleShortButtonPressForSOS: 'true', // set to '' in case it is false
            LongButtonPressToSwitchOff:   true,
            FramePendingMechanismActive:  true,
        },
        transmit_strat:                   'DUAL_RANDOM',
        periodic_activity_period:         0,
        ble_beacon_count:                 4,
        ble_beacon_timeout:               3,
        gps_standby_timeout:              7200,
        confirmed_ul_bitmap: {            // 0x00
            FramePending:                 false,
            Position:                     false,
            EnergyStatus:                 false,
            HeartBeat:                    false,
            ActivityConfigShock:          false,
            Shutdown:                     false,
        },
        confirmed_ul_retry:               3,
        motion_sensitivity:               0,
        shock_detection:                  0,
        ble_rssi_filter:                  -100,
    },
    outdoorGeolocParams: {
        geoloc_sensor:                    'GPS',
        geoloc_method:                    'GPS',
    },
    multitechnGeolocParams: {
        geoloc_sensor:                    'WiFiGPS',
        geoloc_method:                    'WiFiGPS',
    },
    indoorGeolocParams: {
        geoloc_sensor:                    'BLE',
        geoloc_method:                    'BLE',
    },
};

export const EXAMPLE_MOTION_TRACKING = {
    title: 'Motion tracking',
    description: 'Use case: Accurate positions sent every 120s during a motion.',
    opmode: 'MOTION_TRACKING',
    outdoor: { ..._MOTION_TRACKING.basicParams, ..._MOTION_TRACKING.outdoorGeolocParams },
    multitechn: { ..._MOTION_TRACKING.basicParams, ..._MOTION_TRACKING.multitechnGeolocParams },
    indoor: { ..._MOTION_TRACKING.basicParams, ..._MOTION_TRACKING.indoorGeolocParams },
};



// PROFILE 6
const _PERMANENT_TRACKING = {
    basicParams: {
        lora_period:                      600,
        ul_period:                        60,

        periodic_pos_period:              0,
        pw_stat_period:                   0, // TODO
        gps_timeout:                      180,
        agps_timeout:                     55,
        motion_nb_pos:                    3,
        motion_duration:                  120,
        gps_ehpe:                         10,
        gps_convergence:                  30,
        config_flags: {                   // 0x1F
            AsymmetricBLEPairingRejected: false,
            NewJoinReqOnLeavingOffMode:   false,
            MotionEndMessageEnabled:      false,
            MotionStartMessageEnabled:    false,
            LedBlinksOnGPSFix:            false,
            BLEAdvertisingActive:         false,
            WiFiScanWhenGeolocStarts:     '', // set to '' in case it is false
            WiFiPayloadCyphered:          true,
            ConfigReqsAcknoledged:        true,
            DoubleShortButtonPressForSOS: 'true', // set to '' in case it is false
            LongButtonPressToSwitchOff:   true,
            FramePendingMechanismActive:  true,
        },
        transmit_strat:                   'DUAL_RANDOM',
        periodic_activity_period:         0,
        ble_beacon_count:                 4,
        ble_beacon_timeout:               3,
        gps_standby_timeout:              7200,
        confirmed_ul_bitmap: {            // 0x00
            FramePending:                 false,
            Position:                     false,
            EnergyStatus:                 false,
            HeartBeat:                    false,
            ActivityConfigShock:          false,
            Shutdown:                     false,
        },
        confirmed_ul_retry:               3,
        motion_sensitivity:               0,
        shock_detection:                  0,
        ble_rssi_filter:                  -100,
    },
    outdoorGeolocParams: {
        geoloc_sensor:                    'GPS',
        geoloc_method:                    'GPS',
    },
    multitechnGeolocParams: {
        geoloc_sensor:                    'WiFiGPS',
        geoloc_method:                    'WiFiGPS',
    },
    indoorGeolocParams: {
        geoloc_sensor:                    'BLE',
        geoloc_method:                    'BLE',
    },
};

export const EXAMPLE_PERMANENT_TRACKING = {
    title: 'Permanent tracking',
    description:
        'Use case: Accurate positions sent every minute. (WARNING: Consumes a lot of battery power. Should not be used for a long period)',
    opmode: 'PERMANENT_TRACKING',
    outdoor: { ..._PERMANENT_TRACKING.basicParams, ..._PERMANENT_TRACKING.outdoorGeolocParams },
    multitechn: { ..._PERMANENT_TRACKING.basicParams, ..._PERMANENT_TRACKING.multitechnGeolocParams },
    indoor: { ..._PERMANENT_TRACKING.basicParams, ..._PERMANENT_TRACKING.indoorGeolocParams },
};
