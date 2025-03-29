const config_data = `
{
    "dataFormat": "kvs",
    "title": "BBQScoutingPASS 2025",
    "page_title": "FRC 2025: REEFSCAPE",
    "checkboxAs": "10",
    "prematch": [
        {
            "name": "Scouter Initials",
            "code": "s",
            "type": "scouter",
            "size": 5,
            "maxSize": 5,
            "defaultValue": "",
            "required": "true"
        },
        {
            "name": "Event",
            "code": "e",
            "type": "event",
            "defaultValue": "2025txfor",
            "required": "true"
        },
        {
            "name": "Match Level",
            "code": "l",
            "type": "level",
            "choices": {
                "qm": "Quals<br>",
                "sf": "Semifinals<br>",
                "f": "Finals"
            },
            "defaultValue": "qm",
            "required": "true"
        },
        {
            "name": "Match #",
            "code": "m",
            "type": "match",
            "min": 1,
            "max": 150,
            "defaultValue": 1,
            "required": "true"
        },
        {
            "name": "Robot",
            "code": "r",
            "type": "robot",
            "choices": {
                "r1": "Red-1",
                "b1": "Blue-1<br>",
                "r2": "Red-2",
                "b2": "Blue-2<br>",
                "r3": "Red-3",
                "b3": "Blue-3"
            },
            "required": "true"
        },
        {
            "name": "Team #",
            "code": "t",
            "type": "team",
            "min": 1,
            "max": 99999,
	    "required": "true"
        },
        {
            "name": "Auto Start Position",
            "code": "as",
            "type": "clickable_image",
            "filename": "2025/field_image.png",
            "clickRestriction": "one",
            "shape": "circle 4 white orangered true"
        }
    ],
    "auton": [
        {
            "name": "Left Starting Zone",
            "code": "las",
            "type": "bool"
        },
        {
            "name": "Auto Notes",
            "code": "an",
            "type": "text",
            "size": 15,
	        "defaultValue": "",
            "maxSize": 100
        },
        {
            "name": "Bicycle",
            "code": "teleopbicycle",
            "type": "bicycle",
            "bicycle_id": "auton"
        }
    ],
    "teleop": [
        {
            "name": "Defense Timer",
            "code": "dt",
            "type": "timer"
        },
        {
            "name": "Was Defended",
            "code": "wd",
            "type": "bool"
        },
        {
            "name": "Fouls",
            "code": "fo",
            "type": "counter"
        },
        {
            "name": "Algae Removal",
            "code": "ar",
            "type": "counter"
        },
        {
            "name": "Net",
            "code": "net",
            "type": "counter"
        },
        {
            "name": "Processor",
            "code": "pro",
            "type": "counter"
        },
        {
            "name": "L4",
            "code": "l4",
            "type": "counter"
        },
        {
            "name": "L3",
            "code": "l3",
            "type": "counter"
        },
        {
            "name": "L2",
            "code": "l2",
            "type": "counter"
        },
        {
            "name": "L1",
            "code": "l1",
            "type": "counter"
        }
    ],
    "endgame": [
        {
            "name": "Barge Status",
            "code": "bs",
            "type": "radio",
            "choices": {
                "s": "Shallow",
                "fs": "Failed<br>",
                "d": "&nbsp;Deep &nbsp;",
                "fd": "Failed<br>",
                "p": "Parked<br>",
                "x": "n/a"
            },
            "defaultValue": "x"
        },
        {
            "name": "Fail Reason",
            "code": "fr",
            "type": "radio",
            "choices": {
                "t": "Time trouble<br>",
                "m": "Mechanism failure<br>",
                "x": "n/a"
            },
            "defaultValue": "x"
        }
    ],
    "postmatch": [
        {
            "name": "Was Fouled",
            "code": "wf",
            "type": "bool"
        },
        {
            "name": "Defense Rating",
            "code": "dr",
            "type": "radio",
            "choices": {
                "0": "Ineffective<br>",
                "1": "2-4 fouls<br>",
                "2": "1 coral station, 0-1 fouls<br>",
                "3": "2 coral stations, 0-1 fouls<br>",
                "x": "Did not play defense"
            },
            "defaultValue": "x"
        },
        {
            "name": "Justification for Def. Rating",
            "code": "j",
            "type": "text",
            "size": 15,
            "maxSize": 300
        },
        {
            "name": "Notes",
            "code": "co",
            "type": "text",
            "size": 15,
            "maxSize": 300
        }
    ]
}`;
