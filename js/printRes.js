const result = document.getElementById('dateCalc__result');

export const printErr = (errorText) => {
    result.innerHTML = errorText;
}

export const printRes = ({
    years,
    months,
    days
}) => {
    result.innerHTML = `Years: ${years} - Months: ${months} - Days: ${days}`
}