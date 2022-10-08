

function leapYear(year)
{
    let a = year
    if (year % 4 === 0) {
        console.log(`This year is leap year`)
    } else {
        console.log(`It is not an leap year`)
    }
}
leapYear(2016)