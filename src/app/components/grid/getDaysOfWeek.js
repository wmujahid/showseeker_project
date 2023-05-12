function getDaysOfWeek(input) {
  const daysOfWeek = {
    su: 1,
    sun: 1,
    sunday: 1,
    monday: 2,
    mon: 2,
    tuesday: 3,
    tue: 3,
    wednesday: 4,
    wed: 4,
    thursday: 5,
    thu: 5,
    friday: 6,
    fri: 6,
    saturday: 7,
    sat: 7,
    m: 2,
    t: 3,
    w: 4,
    th: 5,
    f: 6,
    s: 7
  };

  const inputDays = input.toLowerCase().replace(/\s/g, '').split(',');
  let outputDays = [];

  inputDays.forEach(inputDay => {
    if (inputDay.includes('-')) {
      const rangeDays = inputDay.split('-');
      const firstDay = rangeDays[0];
      const lastDay = rangeDays[1];

      let firstDayNumber = daysOfWeek[firstDay];
      let lastDayNumber = daysOfWeek[lastDay];

      if (!firstDayNumber || !lastDayNumber) {
        console.log(`${inputDay} is not a valid day of the week`);
        return;
      }

      if (lastDayNumber < firstDayNumber) {
        if (lastDayNumber === 1 && firstDayNumber === 6) {
          // If the range is Friday-Sunday, include Friday, Saturday, and Sunday
          outputDays.push(6, 7, 1);
        } else {
          let temp = firstDayNumber;
          firstDayNumber = lastDayNumber;
          lastDayNumber = temp;
        }
      }

      for (let i = firstDayNumber; i <= lastDayNumber; i++) {
        outputDays.push(i);
      }
    } else {
      const dayNumber = daysOfWeek[inputDay];
      if (dayNumber) {
        outputDays.push(dayNumber);
      } else {
        console.log(`${inputDay} is not a valid day of the week`);
      }
    }
  });

  outputDays = Array.from(new Set(outputDays));
  outputDays.sort((a, b) => a - b);

  return outputDays;
}

module.exports = getDaysOfWeek;