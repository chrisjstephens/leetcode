//1185. Day of the Week
//https://leetcode.com/problems/day-of-the-week

function dayOfTheWeek(day: number, month: number, year: number): string {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
    "Friday", "Saturday"];
    const date = new Date(year + "-" + month + "-" + day);
    return days[date.getDay()];
};
