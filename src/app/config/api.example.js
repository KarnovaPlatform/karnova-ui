let windowProtocol = window.location.protocol; // protocol
let windowHost = window.location.hostname; // host | hostname
let windowPort = window.location.port ? `:${window.location.port}` : ''; // port

let protocol = `${windowProtocol}`
let hostName = `${windowHost}`
let port = `${windowPort}`

let mode = "dev"; // test | dev | prod

const allConfig = {
    "fa": {
        protocol,
        hostName,
        url: `${hostName}${port}/api/`,
        version: "v1",
        dir: "rtl",
        localDateTime: true,
        dateFormat: 'jYYYY-jMM-jDD',
        dateTimeFormat: 'jYYYY-jMM-jDD HH:mm:ss',
        mode
    },
    "en": {
        protocol,
        hostName,
        url: `${hostName}${port}/api/`,
        version: "v1",
        dir: "ltr",
        localDateTime: true,
        dateFormat: 'YYYY-MM-DD',
        dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
        mode
    },
    "ar": {
        protocol,
        hostName,
        url: `${hostName}${port}/api/`,
        version: "v1",
        dir: "rtl",
        localDateTime: true,
        dateFormat: 'YYYY-MM-DD',
        dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
        mode
    },
};

let keys = Object.keys(allConfig);

let lang = localStorage.getItem('lang') || 'fa'

lang = keys.indexOf(lang) > -1 ? lang : 'fa';

export default {
    ...allConfig[lang]
}