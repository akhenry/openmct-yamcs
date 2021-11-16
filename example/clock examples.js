const clockyReportExample = {
    "name": "Example clocky report",
    "type": "clocky-report", // Tells open mct to embed the URL as a webpage
    "location": "58e8ebfd-8404-4398-8ed3-eadaf7487c29", // The UUID of the report's parent object.
    "modified": 1633103402009, // MS in Unix epoch
    "url": "https://banner.ndc.nasa.gov/clock-reports/", // Relative or absolute
    "persisted": 1633103402009, // MS in Unix epoch
    "identifier": {
        "namespace": "", // Namespaces are object storage areas. Need to figure out what to use for clocky
        "key": "03d2c98d-baa6-4b2e-a9d0-32c26ac5e8e1" // Generated UUID (eg. crypto.randomUUID())
    }
};

const clockyReportFolder = {
    "name": "Example clocky report",
    "type": "folder", // Tells open mct to embed the URL as a webpage
    "location": "mine", // The UUID of the report's parent object.
    "composition": [{
        "namespace": "", // Namespaces are object storage areas. Need to figure out what to use for clocky
        "key": "03d2c98d-baa6-4b2e-a9d0-32c26ac5e8e1" // Generated UUID (eg. crypto.randomUUID())
    }]
};

// Questions
// 1. How do we want to organize the reports? By mission day? Calendar date?

// 2. How often do we generate reports?
// 3. Do they need to immediately appear when available?
// 4. Does the user need to be informed when a new clocky report is available?


{
    "_id": "03d2c98d-baa6-4b2e-a9d0-32c26ac5e8e1",
    "metadata": {
        "category": "domain object",
        "type": "clocky-report",
        "owner": "admin",
        "name": "Example clocky report",
        "created": 1633103402009
    },
    "model": {
        "name": "Example clocky report",
        "type": "clocky-report", // Tells open mct to embed the URL as a webpage
        "modified": 1633103402009, // MS in Unix epoch
        "url": "https://banner.ndc.nasa.gov/clock-reports/", // Relative or absolute
        "persisted": 1633103402009, // MS in Unix epoch
        "identifier": {
            "namespace": "", // Namespaces are object storage areas. Need to figure out what to use for clocky
            "key": "03d2c98d-baa6-4b2e-a9d0-32c26ac5e8e1" // Generated UUID (eg. crypto.randomUUID())
        }
    }
};