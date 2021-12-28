import {
    DateTime
} from 'https://moment.github.io/luxon/es6/luxon.min.js';

function getDataDiff(dateFrom, dateTo) {

    const dataFormObj = DateTime.fromISO(dateFrom);
    const dataToObj = DateTime.fromISO(dateTo);

    return dataToObj.diff(dataFormObj, ['years', 'months', 'days']).toObject();
}

export default getDataDiff;