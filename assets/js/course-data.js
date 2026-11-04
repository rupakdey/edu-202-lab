window.LAB_GUIDE_COURSE = {
  "id": "EDU-202",
  "title": "Zscaler for Users – Engineer",
  "subtitle": "Engineer Lab Guide · Rev. 3.5",
  "storagePrefix": "edu202-rev35",
  "labAccess": {
    "title": "CloudShare access",
    "href": "index.html#session-access"
  },
  "sdcAccess": {
    "title": "SDC access checkpoint",
    "href": "sdc-access.html",
    "beforeLab": 10
  },
  "labs": [
    {
      "number": 1,
      "title": "Connect to the Virtual Lab",
      "href": "lab-01.html",
      "sdc": false,
      "tasks": [
        {
          "number": "1.1",
          "id": "task-1-1",
          "title": "Open Your CloudShare Environment",
          "href": "lab-01.html#task-1-1"
        },
        {
          "number": "1.2",
          "id": "task-1-2",
          "title": "Sign In to the Experience Center",
          "href": "lab-01.html#task-1-2"
        }
      ],
      "explainers": []
    },
    {
      "number": 2,
      "title": "Configure Browser Access for Third Parties",
      "href": "lab-02.html",
      "sdc": false,
      "tasks": [
        {
          "number": "2.1",
          "id": "task-2-1",
          "title": "Create the App Connector Group",
          "href": "lab-02.html#task-2-1"
        },
        {
          "number": "2.2",
          "id": "task-2-2",
          "title": "Activate the App Connector",
          "href": "lab-02.html#task-2-2"
        },
        {
          "number": "2.3",
          "id": "task-2-3",
          "title": "Publish HVAC and Allow Browser Access",
          "href": "lab-02.html#task-2-3"
        },
        {
          "number": "2.4",
          "id": "task-2-4",
          "title": "Test Browser Access to HVAC",
          "href": "lab-02.html#task-2-4"
        }
      ],
      "explainers": [
        {
          "id": "browser-access-explainer",
          "title": "Why ZPA Browser Access exists",
          "href": "lab-02.html#browser-access-explainer"
        }
      ]
    },
    {
      "number": 3,
      "title": "Configure Log Streaming",
      "href": "lab-03.html",
      "sdc": false,
      "tasks": [
        {
          "number": "3.1",
          "id": "task-3-1",
          "title": "Enroll the Log Streaming Connector",
          "href": "lab-03.html#task-3-1"
        },
        {
          "number": "3.2",
          "id": "task-3-2",
          "title": "Add the Log Receiver",
          "href": "lab-03.html#task-3-2"
        },
        {
          "number": "3.3",
          "id": "task-3-3",
          "title": "Allow SSH to SIEM",
          "href": "lab-03.html#task-3-3"
        },
        {
          "number": "3.4",
          "id": "task-3-4",
          "title": "Verify the Live Log Feed",
          "href": "lab-03.html#task-3-4"
        }
      ],
      "explainers": []
    },
    {
      "number": 4,
      "title": "Understand Privileged Remote Access",
      "href": "lab-04.html",
      "sdc": false,
      "tasks": [
        {
          "number": "4.1",
          "id": "task-4-1",
          "title": "Create the PRA Application Segments",
          "href": "lab-04.html#task-4-1"
        },
        {
          "number": "4.2",
          "id": "task-4-2",
          "title": "Create the Privileged Portal",
          "href": "lab-04.html#task-4-2"
        },
        {
          "number": "4.3",
          "id": "task-4-3",
          "title": "Create the Privileged Consoles",
          "href": "lab-04.html#task-4-3"
        },
        {
          "number": "4.4",
          "id": "task-4-4",
          "title": "Create Privileged Credentials",
          "href": "lab-04.html#task-4-4"
        },
        {
          "number": "4.5",
          "id": "task-4-5",
          "title": "Map the Privileged Credentials",
          "href": "lab-04.html#task-4-5"
        },
        {
          "number": "4.6",
          "id": "task-4-6",
          "title": "Create the Consoles Policy",
          "href": "lab-04.html#task-4-6"
        },
        {
          "number": "4.7",
          "id": "task-4-7",
          "title": "Launch and Verify PRA Sessions",
          "href": "lab-04.html#task-4-7"
        }
      ],
      "explainers": [
        {
          "id": "pra-explainer",
          "title": "Privileged Remote Access in one view",
          "href": "lab-04.html#pra-explainer"
        }
      ]
    },
    {
      "number": 5,
      "title": "Configure AppProtection in ZPA",
      "href": "lab-05.html",
      "sdc": false,
      "tasks": [
        {
          "number": "5.1",
          "id": "task-5-1",
          "title": "Publish DVWA and Add Internal DNS",
          "href": "lab-05.html#task-5-1"
        },
        {
          "number": "5.2",
          "id": "task-5-2",
          "title": "Create the AppProtection Profile",
          "href": "lab-05.html#task-5-2"
        },
        {
          "number": "5.3",
          "id": "task-5-3",
          "title": "Apply the AppProtection Policy",
          "href": "lab-05.html#task-5-3"
        },
        {
          "number": "5.4",
          "id": "task-5-4",
          "title": "Compare Allow and Block Behavior",
          "href": "lab-05.html#task-5-4"
        }
      ],
      "explainers": [
        {
          "id": "appprotection-explainer",
          "title": "What AppProtection adds to ZPA",
          "href": "lab-05.html#appprotection-explainer"
        }
      ]
    },
    {
      "number": 6,
      "title": "Configure Browser Isolation for ZPA",
      "href": "lab-06.html",
      "sdc": false,
      "tasks": [
        {
          "number": "6.1",
          "id": "task-6-1",
          "title": "Create the Render-Only Profile",
          "href": "lab-06.html#task-6-1"
        },
        {
          "number": "6.2",
          "id": "task-6-2",
          "title": "Apply the Isolation Policy",
          "href": "lab-06.html#task-6-2"
        },
        {
          "number": "6.3",
          "id": "task-6-3",
          "title": "Verify Render-Only Behavior",
          "href": "lab-06.html#task-6-3"
        }
      ],
      "explainers": []
    },
    {
      "number": 7,
      "title": "Configure Cloud Application Monitoring",
      "href": "lab-07.html",
      "sdc": false,
      "tasks": [
        {
          "number": "7.1",
          "id": "task-7-1",
          "title": "Create the End-User Collection",
          "href": "lab-07.html#task-7-1"
        },
        {
          "number": "7.2",
          "id": "task-7-2",
          "title": "Create the Mail Server Application",
          "href": "lab-07.html#task-7-2"
        },
        {
          "number": "7.3",
          "id": "task-7-3",
          "title": "Create Web and Cloud Path Probes",
          "href": "lab-07.html#task-7-3"
        }
      ],
      "explainers": []
    },
    {
      "number": 8,
      "title": "Configure ZDX Alerts and Diagnostics",
      "href": "lab-08.html",
      "sdc": false,
      "tasks": [
        {
          "number": "8.1",
          "id": "task-8-1",
          "title": "Create the Mail Server Alert Rule",
          "href": "lab-08.html#task-8-1"
        },
        {
          "number": "8.2",
          "id": "task-8-2",
          "title": "Run a Diagnostic Session",
          "href": "lab-08.html#task-8-2"
        }
      ],
      "explainers": []
    },
    {
      "number": 9,
      "title": "Automate with Zscaler OneAPI",
      "href": "lab-09.html",
      "sdc": false,
      "tasks": [
        {
          "number": "9.1",
          "id": "task-9-1",
          "title": "Prepare Postman",
          "href": "lab-09.html#task-9-1"
        },
        {
          "number": "9.2",
          "id": "task-9-2",
          "title": "Fork the OneAPI Collection",
          "href": "lab-09.html#task-9-2"
        },
        {
          "number": "9.3",
          "id": "task-9-3",
          "title": "Create the API Client and Gather Variables",
          "href": "lab-09.html#task-9-3"
        },
        {
          "number": "9.4",
          "id": "task-9-4",
          "title": "Authenticate and Test GET Requests",
          "href": "lab-09.html#task-9-4"
        },
        {
          "number": "9.5",
          "id": "task-9-5",
          "title": "Create an App Connector Group through OneAPI",
          "href": "lab-09.html#task-9-5"
        }
      ],
      "explainers": []
    },
    {
      "number": 10,
      "title": "Analyze Data, Reports and Snapshots",
      "href": "lab-10.html",
      "sdc": true,
      "tasks": [
        {
          "number": "10.1",
          "id": "task-10-1",
          "title": "Analyze Data Explorer",
          "href": "lab-10.html#task-10-1"
        },
        {
          "number": "10.2",
          "id": "task-10-2",
          "title": "Review a QBR Report",
          "href": "lab-10.html#task-10-2"
        },
        {
          "number": "10.3",
          "id": "task-10-3",
          "title": "Review Reports and Open a Snapshot",
          "href": "lab-10.html#task-10-3"
        }
      ],
      "explainers": []
    },
    {
      "number": 11,
      "title": "Manage Incidents with Workflow Automation",
      "href": "lab-11.html",
      "sdc": true,
      "tasks": [
        {
          "number": "11.1",
          "id": "task-11-1",
          "title": "Enroll ZCC with the SDC IT Identity",
          "href": "lab-11.html#task-11-1"
        },
        {
          "number": "11.2",
          "id": "task-11-2",
          "title": "Inspect a DLP Incident",
          "href": "lab-11.html#task-11-2"
        },
        {
          "number": "11.3",
          "id": "task-11-3",
          "title": "Review or Update Incident Metadata",
          "href": "lab-11.html#task-11-3"
        },
        {
          "number": "11.4",
          "id": "task-11-4",
          "title": "Review Notification and Escalation Workflows",
          "href": "lab-11.html#task-11-4"
        },
        {
          "number": "11.5",
          "id": "task-11-5",
          "title": "Inspect Automated Workflows",
          "href": "lab-11.html#task-11-5"
        }
      ],
      "explainers": []
    }
  ],
  "search": []
};
