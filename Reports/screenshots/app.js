var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = {
        description: '',
        passed: true,
        failed: true,
        pending: true,
        withLog: true,
    };

    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        $scope.searchSettings.passed = true;
        $scope.searchSettings.failed = true;
        $scope.searchSettings.pending = true;
        $scope.searchSettings.withLog = true;
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.specLevel = function (str) {
        var arr = str.split('|');
        str = "";
        if (arr.length < 3) {
            return true;
        }
        return false;
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };


    this.nToBr = function (str) {
        return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };


    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh == 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number)/1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {passCount++};
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {pendingCount++};
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {failCount++}
        }
        return failCount;
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results =[
    {
        "description": "Open the xyz bank url|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00d500c5-00ae-0065-0066-00d9003e0085.png",
        "timestamp": 1539687006654,
        "duration": 35581
    },
    {
        "description": "click on bank manager button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003400fd-0040-009d-0031-00d700060046.png",
        "timestamp": 1539687047560,
        "duration": 1277
    },
    {
        "description": "Click on Add Customer button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008f0016-0047-0066-0084-001d000500f6.png",
        "timestamp": 1539687049535,
        "duration": 172
    },
    {
        "description": "Enter the first name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009e009c-00ed-0057-004e-0074004f0087.png",
        "timestamp": 1539687050525,
        "duration": 1205
    },
    {
        "description": "Enter the last name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b10019-000b-00f9-0035-00860088007b.png",
        "timestamp": 1539687052225,
        "duration": 190
    },
    {
        "description": "Enter the post code|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a60014-0073-00b7-00cd-003d00a0005a.png",
        "timestamp": 1539687052827,
        "duration": 225
    },
    {
        "description": "Click on Add Customer Button to generte Customer ID|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "008100d2-00a6-00ca-00dd-00c3004b00b0.png",
        "timestamp": 1539687053482,
        "duration": 623
    },
    {
        "description": "Go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ce00f1-0082-00cf-0042-000c008000d9.png",
        "timestamp": 1539687054862,
        "duration": 153
    },
    {
        "description": "Click on Bank Manager Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ce004c-0002-0027-00f0-00f7003c0085.png",
        "timestamp": 1539687055915,
        "duration": 170
    },
    {
        "description": "click on open account button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ca000d-0078-0095-00f6-0028007f00d5.png",
        "timestamp": 1539687056427,
        "duration": 183
    },
    {
        "description": "select customer name|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008a0010-000d-0092-00e0-00bf00d000ff.png",
        "timestamp": 1539687056975,
        "duration": 210
    },
    {
        "description": "select currency |BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009d0029-00e9-008f-0012-003a000d00be.png",
        "timestamp": 1539687057675,
        "duration": 290
    },
    {
        "description": "click on Process button to generate account no|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "00130007-00c6-000d-00e0-00ee00ab00a6.png",
        "timestamp": 1539687058407,
        "duration": 210
    },
    {
        "description": "After generating account number go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008300c7-00cc-00c6-0011-0089008100bd.png",
        "timestamp": 1539687059367,
        "duration": 158
    },
    {
        "description": "Click on Bank Manager Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b600e6-0048-0018-0021-00ee00d60004.png",
        "timestamp": 1539687059990,
        "duration": 175
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009f004c-00b7-0013-004e-002300d000a1.png",
        "timestamp": 1539687060582,
        "duration": 145
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00750074-0003-00ae-0084-008f00060058.png",
        "timestamp": 1539687061077,
        "duration": 253
    },
    {
        "description": "Click on Customer Button|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b800ee-001a-00bd-0078-005800a300db.png",
        "timestamp": 1539687061800,
        "duration": 215
    },
    {
        "description": "Go to homePage|BANK MANAGER LOGIN",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7880,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007c00bd-00b7-00fa-000c-002b0078004f.png",
        "timestamp": 1539687062425,
        "duration": 157
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 2024,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008c0033-0049-009c-0089-005b00ab0037.png",
        "timestamp": 1539773809870,
        "duration": 4898
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12244,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00e5002f-00d8-007b-006d-00bf007e00bf.png",
        "timestamp": 1539774957883,
        "duration": 4569
    },
    {
        "description": "Open the browser|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12244,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00840048-00e9-00e4-00e5-00f800c9008d.png",
        "timestamp": 1539774966062,
        "duration": 2461
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12244,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Failed: name.split is not a function",
        "trace": "TypeError: name.split is not a function\n    at className (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\by.js:138:22)\n    at call (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1068:28)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:907:19\n    at ManagedPromise.invokeCallback_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>\n    at process._tickCallback (internal/process/next_tick.js:189:7)\nFrom: Task: WebDriver.call(function)\n    at Driver.call (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:901:23)\n    at Driver.findElementsInternal_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1068:17)\n    at Driver.findElements (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\webdriver.js:1043:19)\n    at ptor.waitForAngular.then (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:159:44)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at <anonymous>Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as getText] (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as getText] (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:14:21)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\nFrom: Task: Run it(\"Verify Title\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:12:5)\n    at addSpecsToSuite (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:4:1)\n    at Module._compile (module.js:653:30)\n    at Object.Module._extensions..js (module.js:664:10)\n    at Module.load (module.js:566:32)\n    at tryModuleLoad (module.js:506:12)",
        "browserLogs": [],
        "screenShotFile": "00e60031-00d3-00dc-00e6-00d7001600d9.png",
        "timestamp": 1539774970648,
        "duration": 60
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9000,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00060038-00bc-00b3-00cf-00e300980049.png",
        "timestamp": 1539775562778,
        "duration": 3408
    },
    {
        "description": "Open the browser|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9000,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ca0009-009f-0097-00d5-001d00300089.png",
        "timestamp": 1539775567314,
        "duration": 3882
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9000,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Expected 'XYZ Bank' to be 'mainHeading'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:14:32)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "00b90047-004a-00ee-007e-0043008100e2.png",
        "timestamp": 1539775571806,
        "duration": 145
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8272,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a0003d-004d-00bb-0043-0036004300ed.png",
        "timestamp": 1539775830589,
        "duration": 2967
    },
    {
        "description": "Open the browser|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8272,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004d002f-00b9-003a-000d-00c500d900cd.png",
        "timestamp": 1539775834049,
        "duration": 6341
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8272,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Expected 'XYZ Bank' to be 'mainHeading'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:16:32)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "000400f5-0015-00c6-00ff-0000006c009e.png",
        "timestamp": 1539775840823,
        "duration": 2196
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9608,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003100c5-00c5-002d-00aa-00f8009800bd.png",
        "timestamp": 1539776011457,
        "duration": 2310
    },
    {
        "description": "Open the browser|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9608,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003f0074-0004-0025-000c-002900240058.png",
        "timestamp": 1539776014544,
        "duration": 6699
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9608,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Expected 'XYZ Bank' to be 'mainHeading'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:19:32)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "00e300e2-00f0-00ac-0047-00f200ac002f.png",
        "timestamp": 1539776021680,
        "duration": 1219
    },
    {
        "description": "Launch XYZ|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8092,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "006f0088-000d-000e-0019-00cf00e1006f.png",
        "timestamp": 1539776173880,
        "duration": 2880
    },
    {
        "description": "Open the browser|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8092,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00180068-002f-00c9-0069-009b00ca0097.png",
        "timestamp": 1539776177595,
        "duration": 6303
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 8092,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "009a00cc-007a-006b-0052-00c600f90051.png",
        "timestamp": 1539776184265,
        "duration": 1079
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11664,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00db006f-001a-00eb-0059-004200a30019.png",
        "timestamp": 1539776349257,
        "duration": 1756
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 2524,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.54"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00b500bd-00ab-00c9-0085-0047002800fa.png",
        "timestamp": 1539776544821,
        "duration": 1552
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 6612,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [],
        "screenShotFile": "008100bc-0041-00ec-000e-00c9005c002f.png",
        "timestamp": 1539787319382,
        "duration": 2749
    },
    {
        "description": "Verify Title|Launch URL",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10344,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.67"
        },
        "message": "Expected 'XYZ Bank' to be 'XYZ1 Bank'.",
        "trace": "Error: Failed expectation\n    at UserContext.<anonymous> (C:\\Users\\E001105.CIGNITIGLOBAL\\Desktop\\JbHunt\\Protractor_typeScriptProject (1)\\Protractor_typeScriptProject\\xyz_bank\\Specs\\test.js:17:32)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n    at TaskQueue.execute_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2974:25)\n    at C:\\Users\\E001105.CIGNITIGLOBAL\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7",
        "browserLogs": [],
        "screenShotFile": "006200eb-0003-0037-00c3-00d000480016.png",
        "timestamp": 1539788347685,
        "duration": 4663
    },
    {
        "description": "launch and enter value in BankManager|BankManager",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "instanceId": 9676,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "00a1005f-0025-0061-005a-002900c1004e.png",
        "timestamp": 1541543890277,
        "duration": 2
    },
    {
        "description": "(click on Bank Manager Login button|BankManager",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "instanceId": 9676,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "009f00e9-0058-0039-0079-002a00600061.png",
        "timestamp": 1541543890476,
        "duration": 0
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "instanceId": 9676,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "009100d3-0096-003f-00b0-008b00cb0007.png",
        "timestamp": 1541543890504,
        "duration": 0
    },
    {
        "description": "enter first name value|BankManager",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "instanceId": 9676,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "0090009a-00e0-00ec-0066-004600ed0070.png",
        "timestamp": 1541543890524,
        "duration": 0
    },
    {
        "description": "enter last name value|BankManager",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "instanceId": 9676,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "00e400ed-0083-009d-0042-0001003400ca.png",
        "timestamp": 1541543890543,
        "duration": 0
    },
    {
        "description": "enter Pstal code value|BankManager",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "instanceId": 9676,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "00b00056-0093-00b5-00a5-000200e400a7.png",
        "timestamp": 1541543890559,
        "duration": 0
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "instanceId": 9676,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "009f0020-0027-007f-0040-004b00ad00c1.png",
        "timestamp": 1541543890582,
        "duration": 0
    },
    {
        "description": "launch and enter value in BankManager|BankManager",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "instanceId": 7888,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "006f0042-00f1-009f-00ab-002c00240068.png",
        "timestamp": 1541606374020,
        "duration": 7
    },
    {
        "description": "(click on Bank Manager Login button|BankManager",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "instanceId": 7888,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "00ac00ec-00f0-0055-0010-00be00fb0004.png",
        "timestamp": 1541606374153,
        "duration": 1
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "instanceId": 7888,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "004f0087-00e0-00b6-009f-006e0042001a.png",
        "timestamp": 1541606374179,
        "duration": 0
    },
    {
        "description": "enter first name value|BankManager",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "instanceId": 7888,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "00d900e6-003f-000d-0019-00c400ee00a2.png",
        "timestamp": 1541606374209,
        "duration": 0
    },
    {
        "description": "enter last name value|BankManager",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "instanceId": 7888,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "003c0017-004f-00c0-0072-000e00f8006f.png",
        "timestamp": 1541606374222,
        "duration": 0
    },
    {
        "description": "enter Pstal code value|BankManager",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "instanceId": 7888,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "00cd0029-0005-00d2-0027-00f0007a0047.png",
        "timestamp": 1541606374240,
        "duration": 0
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": false,
        "pending": true,
        "os": "Windows NT",
        "instanceId": 7888,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "002d0080-00f9-00cb-005d-005b00cd00f6.png",
        "timestamp": 1541606374254,
        "duration": 0
    },
    {
        "description": "launch and enter value in BankManager|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9772,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00f00060-0079-00f6-00c1-001500820056.png",
        "timestamp": 1541607774838,
        "duration": 15672
    },
    {
        "description": "click on Bank Manager Login button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9772,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //button[contains(text(), 'Bank Manager login')])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //button[contains(text(), 'Bank Manager login')])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:15:28)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:11:55)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\nFrom: Task: Run it(\"click on Bank Manager Login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:11:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:4:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00fd0060-0040-0033-000e-0097007300fa.png",
        "timestamp": 1541607790973,
        "duration": 55
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9772,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //button[@ng-class = 'btnClass1'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //button[@ng-class = 'btnClass1'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as click] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as click] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:29:21)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:25:49)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\nFrom: Task: Run it(\"click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:25:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:4:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "0024000e-00ab-008e-0033-003000f40046.png",
        "timestamp": 1541607791347,
        "duration": 44
    },
    {
        "description": "enter first name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9772,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model = 'fname'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model = 'fname'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:40:23)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:38:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\nFrom: Task: Run it(\"enter first name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:38:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:4:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00060086-000c-0088-00da-008c001b00fa.png",
        "timestamp": 1541607791698,
        "duration": 50
    },
    {
        "description": "enter last name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9772,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model = 'lname'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model = 'lname'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:54:22)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:52:42)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\nFrom: Task: Run it(\"enter last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:52:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:4:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "004f008e-0085-00dc-0037-00f30029000a.png",
        "timestamp": 1541607792029,
        "duration": 34
    },
    {
        "description": "enter Pstal code value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9772,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: pstlcode.isdisplayed is not a function",
        "trace": "TypeError: pstlcode.isdisplayed is not a function\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:67:22)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:65:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"enter Pstal code value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:65:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:4:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "008200b5-00b7-00a8-0048-00ef005000c3.png",
        "timestamp": 1541607792365,
        "duration": 4
    },
    {
        "description": "click on add customer submit button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9772,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: custbtn.isdisplayed is not a function",
        "trace": "TypeError: custbtn.isdisplayed is not a function\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:79:21)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:77:56)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"click on add customer submit button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:77:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\specs\\HomeworkTC.ts:4:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "003c00e5-00b1-0000-006d-0021001c00fe.png",
        "timestamp": 1541607792684,
        "duration": 3
    },
    {
        "description": "launch and enter value in BankManager|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12136,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00a700f2-00d8-0053-0064-007100bd0046.png",
        "timestamp": 1541711703063,
        "duration": 4487
    },
    {
        "description": "click on Bank Manager Login button|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12136,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000f0076-003b-00cc-000e-00ac000a00ce.png",
        "timestamp": 1541711707989,
        "duration": 48
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12136,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "006d00f4-0078-0070-00a2-002e004d00c3.png",
        "timestamp": 1541711708290,
        "duration": 33
    },
    {
        "description": "enter first name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12136,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model = 'fname'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model = 'fname'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:46:23)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:44:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\nFrom: Task: Run it(\"enter first name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:44:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:8:1\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)",
        "browserLogs": [],
        "screenShotFile": "004600d5-00a7-009a-00b5-00c8009400b4.png",
        "timestamp": 1541711708608,
        "duration": 35
    },
    {
        "description": "enter last name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12136,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model = 'lname'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model = 'lname'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:60:22)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:58:42)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\nFrom: Task: Run it(\"enter last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:58:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:8:1\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)",
        "browserLogs": [],
        "screenShotFile": "00e30024-000a-0026-0071-0079006a00e5.png",
        "timestamp": 1541711708934,
        "duration": 34
    },
    {
        "description": "enter Pstal code value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12136,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: pstlcode.isdisplayed is not a function",
        "trace": "TypeError: pstlcode.isdisplayed is not a function\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:73:22)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:71:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"enter Pstal code value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:71:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:8:1\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)",
        "browserLogs": [],
        "screenShotFile": "00b0000f-0019-003a-0046-0049007c00ca.png",
        "timestamp": 1541711709222,
        "duration": 3
    },
    {
        "description": "click on add customer submit button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 12136,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: custbtn.isdisplayed is not a function",
        "trace": "TypeError: custbtn.isdisplayed is not a function\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:85:21)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:83:56)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"click on add customer submit button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:83:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:8:1\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)",
        "browserLogs": [],
        "screenShotFile": "00b90068-00c7-0000-0098-00b5004e00bf.png",
        "timestamp": 1541711709508,
        "duration": 2
    },
    {
        "description": "launch and enter value in BankManager|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11548,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003e00c8-0099-00cd-0034-003d00d000e4.png",
        "timestamp": 1541715381756,
        "duration": 1564
    },
    {
        "description": "click on Bank Manager Login button|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11548,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "005b009c-005a-0085-009f-001f0098002a.png",
        "timestamp": 1541715383657,
        "duration": 51
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11548,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0036008f-0083-0074-00c6-000300d40054.png",
        "timestamp": 1541715384229,
        "duration": 36
    },
    {
        "description": "enter first name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11548,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:49:47)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:45:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)",
        "browserLogs": [],
        "screenShotFile": "00740063-00a8-0090-00ef-001100b200cd.png",
        "timestamp": 1541715384546,
        "duration": 10
    },
    {
        "description": "enter last name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11548,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model = 'lname'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model = 'lname'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:61:22)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:59:42)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\nFrom: Task: Run it(\"enter last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:59:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:9:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "001700a2-0069-007c-004a-00e500de0090.png",
        "timestamp": 1541715384829,
        "duration": 62
    },
    {
        "description": "enter Pstal code value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11548,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: pstlcode.isdisplayed is not a function",
        "trace": "TypeError: pstlcode.isdisplayed is not a function\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:74:22)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:72:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"enter Pstal code value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:72:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:9:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "007900d7-0054-0052-00f3-001f00ad0012.png",
        "timestamp": 1541715385190,
        "duration": 2
    },
    {
        "description": "click on add customer submit button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11548,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: custbtn.isdisplayed is not a function",
        "trace": "TypeError: custbtn.isdisplayed is not a function\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:86:21)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:84:56)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"click on add customer submit button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:84:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:9:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00db00c3-004c-00b0-00cd-004200490071.png",
        "timestamp": 1541715385477,
        "duration": 2
    },
    {
        "description": "launch and enter value in BankManager|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11388,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00d9002e-003e-00e5-00c0-001f005300ba.png",
        "timestamp": 1541715869024,
        "duration": 1805
    },
    {
        "description": "click on Bank Manager Login button|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11388,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ef00d4-0024-0040-00d8-00e800810035.png",
        "timestamp": 1541715871177,
        "duration": 113
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11388,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ec00e6-0067-0009-0003-0084003500e0.png",
        "timestamp": 1541715871573,
        "duration": 365
    },
    {
        "description": "enter first name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11388,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:49:47)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:45:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)",
        "browserLogs": [],
        "screenShotFile": "007100a3-00f8-00b2-0046-003300cb0093.png",
        "timestamp": 1541715872233,
        "duration": 12
    },
    {
        "description": "enter last name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11388,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model = 'lname'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model = 'lname'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:61:22)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:59:42)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\nFrom: Task: Run it(\"enter last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:59:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:9:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00b900cc-00fc-00ed-00a4-009800080017.png",
        "timestamp": 1541715872506,
        "duration": 32
    },
    {
        "description": "enter Pstal code value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11388,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: pstlcode.isdisplayed is not a function",
        "trace": "TypeError: pstlcode.isdisplayed is not a function\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:74:22)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:72:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"enter Pstal code value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:72:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:9:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00f30098-00c4-00a2-00c9-009800e100cf.png",
        "timestamp": 1541715872797,
        "duration": 2
    },
    {
        "description": "click on add customer submit button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11388,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: custbtn.isdisplayed is not a function",
        "trace": "TypeError: custbtn.isdisplayed is not a function\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:86:21)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:84:56)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"click on add customer submit button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:84:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:9:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00fa0099-003b-0051-0001-00e9007f0054.png",
        "timestamp": 1541715873052,
        "duration": 2
    },
    {
        "description": "launch and enter value in BankManager|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9500,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "0033003c-002d-00ad-00b1-00640006003f.png",
        "timestamp": 1541716240089,
        "duration": 1959
    },
    {
        "description": "click on Bank Manager Login button|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9500,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004300c2-0074-0044-001f-0097003a0060.png",
        "timestamp": 1541716242394,
        "duration": 102
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9500,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000d002a-00aa-008c-007c-008a004000b8.png",
        "timestamp": 1541716242767,
        "duration": 101
    },
    {
        "description": "enter first name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9500,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "TypeError: Cannot read property 'firstname' of undefined",
        "trace": "TypeError: Cannot read property 'firstname' of undefined\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:49:47)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:45:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)",
        "browserLogs": [],
        "screenShotFile": "00ac006b-008d-0058-00cb-00f600ed0027.png",
        "timestamp": 1541716243345,
        "duration": 30
    },
    {
        "description": "enter last name value|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9500,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00650054-0061-0016-000f-009500860033.png",
        "timestamp": 1541716243673,
        "duration": 170
    },
    {
        "description": "enter Pstal code value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9500,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: pstlcode.isdisplayed is not a function",
        "trace": "TypeError: pstlcode.isdisplayed is not a function\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:74:22)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:72:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"enter Pstal code value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:72:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:9:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "0050009f-00a7-0073-0064-00ca00570042.png",
        "timestamp": 1541716244226,
        "duration": 3
    },
    {
        "description": "click on add customer submit button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 9500,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: custbtn.isdisplayed is not a function",
        "trace": "TypeError: custbtn.isdisplayed is not a function\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:86:21)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:84:56)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"click on add customer submit button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:84:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:9:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00ab0002-009b-0050-0039-006e004b0013.png",
        "timestamp": 1541716244506,
        "duration": 2
    },
    {
        "description": "launch and enter value in BankManager|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10764,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00f100d5-0031-00c5-0072-001d00b700a8.png",
        "timestamp": 1541716445202,
        "duration": 1467
    },
    {
        "description": "click on Bank Manager Login button|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10764,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00e100db-00f0-0045-00ca-008c00db0092.png",
        "timestamp": 1541716447002,
        "duration": 102
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10764,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "001b001a-00db-00ca-007b-002f00d800ae.png",
        "timestamp": 1541716447565,
        "duration": 102
    },
    {
        "description": "enter first name value|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10764,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007f00aa-00c4-0062-00bd-002700410012.png",
        "timestamp": 1541716448389,
        "duration": 177
    },
    {
        "description": "enter last name value|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10764,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00830033-0060-007a-0049-003a00f70086.png",
        "timestamp": 1541716448962,
        "duration": 135
    },
    {
        "description": "enter Pstal code value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10764,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: pstlcode.isdisplayed is not a function",
        "trace": "TypeError: pstlcode.isdisplayed is not a function\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:74:22)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:72:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"enter Pstal code value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:72:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:9:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00f50051-0016-00d3-00ac-0067006100a7.png",
        "timestamp": 1541716449356,
        "duration": 7
    },
    {
        "description": "click on add customer submit button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 10764,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: custbtn.isdisplayed is not a function",
        "trace": "TypeError: custbtn.isdisplayed is not a function\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:86:21)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:84:56)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"click on add customer submit button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:84:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:9:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "0090007c-00cd-0050-00bd-004f003800bb.png",
        "timestamp": 1541716449671,
        "duration": 3
    },
    {
        "description": "launch and enter value in BankManager|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7428,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00ed000f-0080-00a1-00e8-004c005f0096.png",
        "timestamp": 1541716577150,
        "duration": 1444
    },
    {
        "description": "click on Bank Manager Login button|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7428,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000b0014-0024-000c-0094-0032007200ec.png",
        "timestamp": 1541716578897,
        "duration": 112
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7428,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "003500b6-00bc-00aa-00c9-007a009500cc.png",
        "timestamp": 1541716579291,
        "duration": 80
    },
    {
        "description": "enter first name value|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7428,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00f000be-00fe-0055-0094-006c008200e9.png",
        "timestamp": 1541716579947,
        "duration": 170
    },
    {
        "description": "enter last name value|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7428,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "008f0099-00a2-00ee-006b-000d00e000eb.png",
        "timestamp": 1541716580613,
        "duration": 136
    },
    {
        "description": "enter Pstal code value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7428,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: pstlcode.isdisplayed is not a function",
        "trace": "TypeError: pstlcode.isdisplayed is not a function\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:74:22)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:72:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"enter Pstal code value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:72:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:9:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "009a0073-00cd-0097-0087-002f00b20072.png",
        "timestamp": 1541716581027,
        "duration": 5
    },
    {
        "description": "click on add customer submit button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7428,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: custbtn.isdisplayed is not a function",
        "trace": "TypeError: custbtn.isdisplayed is not a function\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:86:21)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:84:56)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\n    at schedulerExecute (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\nFrom: Task: Run it(\"click on add customer submit button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:84:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:9:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00100075-00b5-00b4-00da-00c6000500f1.png",
        "timestamp": 1541716581301,
        "duration": 3
    },
    {
        "description": "launch and enter value in BankManager|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11708,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "007c0057-00c6-004a-0093-007d00db00b5.png",
        "timestamp": 1541797573852,
        "duration": 1858
    },
    {
        "description": "click on Bank Manager Login button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11708,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.clickonAddcustomerButton (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:36:21)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:26:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:25:55)\nFrom: Task: Run it(\"click on Bank Manager Login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:25:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00bb0031-0002-00fd-009e-002c00f40084.png",
        "timestamp": 1541797576117,
        "duration": 50
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11708,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.clickonAddcustomerButton (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:36:21)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:31:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:30:49)\nFrom: Task: Run it(\"click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:30:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00560033-0064-00f4-0009-002800ae00f2.png",
        "timestamp": 1541797576419,
        "duration": 27
    },
    {
        "description": "enter first name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11708,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model ='fName'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model ='fName'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.enterFirstName (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:48:23)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:37:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:36:43)\nFrom: Task: Run it(\"enter first name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:36:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00140088-0098-0020-009b-008100cf00a0.png",
        "timestamp": 1541797576708,
        "duration": 33
    },
    {
        "description": "enter last name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11708,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model ='lName'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model ='lName'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.enterLastName (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:60:18)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:43:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:42:42)\nFrom: Task: Run it(\"enter last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:42:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "006c001b-0028-0066-0090-003000b300f8.png",
        "timestamp": 1541797577222,
        "duration": 51
    },
    {
        "description": "enter Pstal code value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11708,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: pstlcode.isdisplayed is not a function",
        "trace": "TypeError: pstlcode.isdisplayed is not a function\n    at AddCustomer.enterpostcode (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:72:18)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:48:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:47:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\nFrom: Task: Run it(\"enter Pstal code value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:47:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00de009a-002a-006d-0057-009d003f00f7.png",
        "timestamp": 1541797577860,
        "duration": 3
    },
    {
        "description": "click on add customer submit button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 11708,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: custbtn.isdisplayed is not a function",
        "trace": "TypeError: custbtn.isdisplayed is not a function\n    at AddCustomer.addCustomerButtonClick (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:84:21)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:53:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:52:56)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\nFrom: Task: Run it(\"click on add customer submit button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:52:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "000e003b-00c8-0083-008f-004c008c0057.png",
        "timestamp": 1541797578128,
        "duration": 3
    },
    {
        "description": "launch and enter value in BankManager|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15132,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "002200a3-00e1-00eb-00e0-005300ec002a.png",
        "timestamp": 1541798369987,
        "duration": 1506
    },
    {
        "description": "click on Bank Manager Login button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15132,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.clickonAddcustomerButton (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:36:21)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:26:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:25:55)\nFrom: Task: Run it(\"click on Bank Manager Login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:25:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "0000003d-0017-0092-00cd-000100d10013.png",
        "timestamp": 1541798371797,
        "duration": 62
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15132,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.clickonAddcustomerButton (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:36:21)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:31:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:30:49)\nFrom: Task: Run it(\"click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:30:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "007a001b-008d-00be-0092-0084000b00de.png",
        "timestamp": 1541798372132,
        "duration": 28
    },
    {
        "description": "enter first name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15132,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model ='fName'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model ='fName'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.enterFirstName (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:48:23)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:37:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:36:43)\nFrom: Task: Run it(\"enter first name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:36:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "007c0063-005f-00ad-006d-00ba00a60061.png",
        "timestamp": 1541798372487,
        "duration": 46
    },
    {
        "description": "enter last name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15132,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model ='lName'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model ='lName'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.enterLastName (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:60:18)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:43:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:42:42)\nFrom: Task: Run it(\"enter last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:42:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00c400de-0023-0004-00c1-004a00c80097.png",
        "timestamp": 1541798373060,
        "duration": 46
    },
    {
        "description": "enter Pstal code value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15132,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: pstlcode.isdisplayed is not a function",
        "trace": "TypeError: pstlcode.isdisplayed is not a function\n    at AddCustomer.enterpostcode (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:72:18)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:48:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:47:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\nFrom: Task: Run it(\"enter Pstal code value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:47:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00ff007d-00a5-0084-004f-000a00dc007b.png",
        "timestamp": 1541798373371,
        "duration": 3
    },
    {
        "description": "click on add customer submit button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15132,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: custbtn.isdisplayed is not a function",
        "trace": "TypeError: custbtn.isdisplayed is not a function\n    at AddCustomer.addCustomerButtonClick (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:84:21)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:53:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:52:56)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\nFrom: Task: Run it(\"click on add customer submit button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:52:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:12:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00cf00c5-0062-005b-00e7-0084003a002c.png",
        "timestamp": 1541798373622,
        "duration": 3
    },
    {
        "description": "launch and enter value in BankManager|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15004,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00fc00b7-0083-00cc-00c4-00ba007500e7.png",
        "timestamp": 1542140344660,
        "duration": 3470
    },
    {
        "description": "click on Bank Manager Login button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15004,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.clickonAddcustomerButton (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:36:21)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:32:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:31:55)\nFrom: Task: Run it(\"click on Bank Manager Login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:31:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:17:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00ef00b3-00b2-005c-008c-00ad00210063.png",
        "timestamp": 1542140348569,
        "duration": 49
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15004,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.clickonAddcustomerButton (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:36:21)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:37:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:36:49)\nFrom: Task: Run it(\"click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:36:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:17:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00f30052-0057-00e7-00ba-00ad00270015.png",
        "timestamp": 1542140348875,
        "duration": 29
    },
    {
        "description": "enter first name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15004,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model ='fName'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model ='fName'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.enterFirstName (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:48:23)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:43:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:42:43)\nFrom: Task: Run it(\"enter first name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:42:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:17:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00070039-00ed-0090-00ab-00fa00280077.png",
        "timestamp": 1542140349196,
        "duration": 34
    },
    {
        "description": "enter last name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15004,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model ='lName'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model ='lName'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.enterLastName (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:60:18)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:49:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:48:42)\nFrom: Task: Run it(\"enter last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:48:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:17:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "000c0091-00b1-00c2-00d8-006000df009d.png",
        "timestamp": 1542140349507,
        "duration": 37
    },
    {
        "description": "enter Pstal code value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15004,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: pstlcode.isdisplayed is not a function",
        "trace": "TypeError: pstlcode.isdisplayed is not a function\n    at AddCustomer.enterpostcode (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:72:18)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:54:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:53:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\nFrom: Task: Run it(\"enter Pstal code value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:53:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:17:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "007600bc-004f-00de-0020-00b3006a0027.png",
        "timestamp": 1542140350254,
        "duration": 2
    },
    {
        "description": "click on add customer submit button|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 15004,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "004e00a9-009d-0057-00ea-006c003d00b5.png",
        "timestamp": 1542140350552,
        "duration": 2
    },
    {
        "description": "launch and enter value in BankManager|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7568,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00c900f4-00a8-00df-0007-00b7003c00d3.png",
        "timestamp": 1542140386264,
        "duration": 7728
    },
    {
        "description": "click on Bank Manager Login button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7568,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.clickonAddcustomerButton (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:36:21)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:32:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:31:55)\nFrom: Task: Run it(\"click on Bank Manager Login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:31:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:17:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "0081000e-00c0-006c-00b6-0077002300fa.png",
        "timestamp": 1542140394285,
        "duration": 69
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7568,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.clickonAddcustomerButton (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:36:21)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:37:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:36:49)\nFrom: Task: Run it(\"click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:36:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:17:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "003f0058-0081-0043-0069-00f700830083.png",
        "timestamp": 1542140394627,
        "duration": 25
    },
    {
        "description": "enter first name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7568,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model ='fName'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model ='fName'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.enterFirstName (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:48:23)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:43:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:42:43)\nFrom: Task: Run it(\"enter first name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:42:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:17:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "009b007e-00b7-0040-00fa-007b002d0032.png",
        "timestamp": 1542140394918,
        "duration": 35
    },
    {
        "description": "enter last name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7568,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model ='lName'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model ='lName'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.enterLastName (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:60:18)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:49:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:48:42)\nFrom: Task: Run it(\"enter last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:48:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:17:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00f50078-0090-0021-00a0-00db00cf001a.png",
        "timestamp": 1542140395215,
        "duration": 35
    },
    {
        "description": "enter Pstal code value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7568,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: pstlcode.isdisplayed is not a function",
        "trace": "TypeError: pstlcode.isdisplayed is not a function\n    at AddCustomer.enterpostcode (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:72:18)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:54:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:53:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\nFrom: Task: Run it(\"enter Pstal code value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:53:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:17:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00b300fa-00d1-00ea-00e1-005a00ad0086.png",
        "timestamp": 1542140395552,
        "duration": 4
    },
    {
        "description": "click on add customer submit button|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 7568,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00c000b7-008e-0093-00c3-0073007700a4.png",
        "timestamp": 1542140395833,
        "duration": 6
    },
    {
        "description": "launch and enter value in BankManager|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13496,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "00820019-0045-00e2-0078-009b00aa005e.png",
        "timestamp": 1542222720133,
        "duration": 3607
    },
    {
        "description": "click on Bank Manager Login button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13496,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.clickonAddcustomerButton (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:36:21)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:32:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:31:55)\nFrom: Task: Run it(\"click on Bank Manager Login button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:31:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:17:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "0002009a-0029-00c8-00b3-0009008600f0.png",
        "timestamp": 1542222724150,
        "duration": 62
    },
    {
        "description": "click on add customer button|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13496,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //button[@ng-class ='btnClass1'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.clickonAddcustomerButton (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:36:21)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:37:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:36:49)\nFrom: Task: Run it(\"click on add customer button\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:36:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:17:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "002a003a-001a-0095-009a-00e100a30056.png",
        "timestamp": 1542222724471,
        "duration": 30
    },
    {
        "description": "enter first name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13496,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model ='fName'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model ='fName'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.enterFirstName (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:48:23)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:43:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:42:43)\nFrom: Task: Run it(\"enter first name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:42:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:17:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "009900c3-008e-0004-00f0-00390065000a.png",
        "timestamp": 1542222724782,
        "duration": 53
    },
    {
        "description": "enter last name value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13496,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: No element found using locator: By(xpath, //input[@ng-model ='lName'])",
        "trace": "NoSuchElementError: No element found using locator: By(xpath, //input[@ng-model ='lName'])\n    at elementArrayFinder.getWebElements.then (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:814:27)\n    at ManagedPromise.invokeCallback_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1376:14)\n    at TaskQueue.execute_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3084:14)\n    at TaskQueue.executeNext_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:3067:27)\n    at asyncRun (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2927:27)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:668:7\n    at process._tickCallback (internal/process/next_tick.js:68:7)Error\n    at ElementArrayFinder.applyAction_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:459:27)\n    at ElementArrayFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:91:29)\n    at ElementFinder.(anonymous function).args [as isDisplayed] (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\built\\element.js:831:22)\n    at AddCustomer.enterLastName (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:60:18)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:49:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:48:42)\nFrom: Task: Run it(\"enter last name value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:48:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:17:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00ea007e-0043-00ce-00f4-002d00390014.png",
        "timestamp": 1542222725129,
        "duration": 126
    },
    {
        "description": "enter Pstal code value|BankManager",
        "passed": false,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13496,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Failed: pstlcode.isdisplayed is not a function",
        "trace": "TypeError: pstlcode.isdisplayed is not a function\n    at AddCustomer.enterpostcode (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\pages\\BankManagerTest\\bankmanager.ts:72:18)\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:54:31)\n    at Generator.next (<anonymous>)\n    at C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:7:71\n    at new Promise (<anonymous>)\n    at __awaiter (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.js:3:12)\n    at UserContext.it (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:53:43)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n    at new ManagedPromise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1077:7)\n    at ControlFlow.promise (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2505:12)\nFrom: Task: Run it(\"enter Pstal code value\") in control flow\n    at UserContext.<anonymous> (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:94:19)\n    at attempt (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4297:26)\n    at QueueRunner.run (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4217:20)\n    at runNext (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4257:20)\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4264:13\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4172:9\n    at C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:64:48\n    at ControlFlow.emit (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\events.js:62:21)\n    at ControlFlow.shutdown_ (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2674:10)\n    at shutdownTask_.MicroTask (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2599:53)\nFrom asynchronous test: \nError\n    at Suite.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:53:5)\n    at addSpecsToSuite (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1107:25)\n    at Env.describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:1074:7)\n    at describe (C:\\Users\\jisqlj3\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasmine-core\\lib\\jasmine-core\\jasmine.js:4399:18)\n    at Object.<anonymous> (C:\\Users\\jisqlj3\\Desktop\\Project\\xyz_bank\\xyz_bank\\Specs\\HomeworkTC.ts:17:1)\n    at Module._compile (internal/modules/cjs/loader.js:689:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)\n    at Module.load (internal/modules/cjs/loader.js:599:32)\n    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)",
        "browserLogs": [],
        "screenShotFile": "00a400ab-00ce-0061-00ef-0075007e00d3.png",
        "timestamp": 1542222725529,
        "duration": 3
    },
    {
        "description": "click on add customer submit button|BankManager",
        "passed": true,
        "pending": false,
        "os": "Windows NT",
        "instanceId": 13496,
        "browser": {
            "name": "chrome",
            "version": "70.0.3538.77"
        },
        "message": "Passed",
        "browserLogs": [],
        "screenShotFile": "000e008b-0094-0047-00c3-00c6009400cd.png",
        "timestamp": 1542222725801,
        "duration": 4
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    var prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length-1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};