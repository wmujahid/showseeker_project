const getDaysOfWeek = require('../components/grid/getDaysOfWeek');

test('getDaysOfWeek returns correct numbers for different formats', () => {
  expect(getDaysOfWeek('m-w,s,su')).toEqual([1, 2, 3, 4, 7]);
  expect(getDaysOfWeek('th,s,su')).toEqual([1, 5, 7]);
  expect(getDaysOfWeek('Monday,Tuesday,Wednesday')).toEqual([2, 3, 4]);
  expect(getDaysOfWeek('Mon,tue,Wed,Th,fri,SAT,Su')).toEqual([1, 2, 3, 4, 5, 6, 7]);
  expect(getDaysOfWeek('mon-wed,saturday')).toEqual([2, 3, 4, 7]);
  expect(getDaysOfWeek('friday-su')).toEqual([1, 6, 7]);
  expect(getDaysOfWeek('m,tue,th-s')).toEqual([2, 3, 5, 6, 7]);
});