import Moment from 'moment';
import extendMoment from 'moment-range';
import type { TimeInterface } from "../interfaces/time"
const moment = extendMoment.extendMoment(Moment as any)

class Age {
    static calculate(year: number, month: number, day: number): TimeInterface {
        const start = moment();
        const end = moment(`${year}-${month}-${day}`, "YYYY-MM-DD");
        const range = moment.range(start, end)
        return {
            years: Math.abs(range.diff("years")),
            months: Math.abs((range.diff("years") * 12) - range.diff("month")),
            days: (range.diff("years") * 12) - range.diff("month") === 0 ? Math.abs(start.day() - end.day()) : day
        } as TimeInterface   
    }
}

export {
    Age
}