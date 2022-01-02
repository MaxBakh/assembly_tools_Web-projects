import {
    DateTime
} from 'luxon';

function getDataDiff(dateFrom, dateTo) {

    const dataFormObj = DateTime.fromISO(dateFrom);
    const dataToObj = DateTime.fromISO(dateTo);

    return dataToObj.diff(dataFormObj, ['years', 'months', 'days']).toObject();
}

export default getDataDiff;