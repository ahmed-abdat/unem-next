import { Timestamp } from "firebase/firestore";
import moment from "moment";
import "moment/locale/ar-sa";

moment.locale("ar_SA");
moment.updateLocale("ar_SA", {
  relativeTime: {
    future: "في %s",
    past: "منذ %s",
    s: "ثوان",
    ss: "%d ثانية",
    m: "دقيقة",
    mm: "%d دقائق",
    h: "ساعة",
    hh: "%d ساعات",
    d: "يوم",
    dd: "%d أيام",
    M: "شهر",
    MM: "%d أشهر",
    y: "سنة",
    yy: "%d سنوات",
  },
});

export   const showTime = (seconds : number) => {
    const now = moment();
    if(!seconds) return null;
    const time = seconds * 1000;
    const momentTime = moment(time);
    const houreAndMinitFormate = momentTime.format("hh:mm");
    const monthAndDayFormat = momentTime.format("MM/DD");
    const yearFormat = momentTime.format("YYYY");
    return currentDate(
      momentTime,
      houreAndMinitFormate,
      now,
      monthAndDayFormat,
      yearFormat
    );
  };

export const showTimeDate = (seconds : number) => {
    if(!seconds) return null;
    const time = seconds * 1000;
    const momentTime = moment(time);
    const dateFormate = momentTime.format("DD/MM/YYYY");
    return dateFormate;
  }


  const currentDate = (
    momentTime : moment.Moment,
    houreAndMinitFormate : string,
    now : moment.Moment,
    monthAndDayFormat : string,
    yearFormat : string
  ) => {
    const AmPm = `${momentTime.format("a") === "am" ? "ص" : "م"}`;
    if (momentTime.isSame(now, "day")) {
      return `اليوم الساعة ${houreAndMinitFormate} ${AmPm}`;
    } else if (momentTime.isSame(now.clone().subtract(1, "day"), "day")) {
      return `أمس الساعة ${houreAndMinitFormate} ${AmPm}`;
    } else if (
      momentTime.isSame(now, "month") &&
      momentTime.isSame(now, "year")
    ) {
      return `${monthName(
        monthAndDayFormat
      )} الساعة ${houreAndMinitFormate} ${AmPm}`;
    } else {
      return `${monthName(
        monthAndDayFormat
      )} ${yearFormat} الساعة ${houreAndMinitFormate} ${AmPm}`;
    }
  };

  const monthName = (months : string) => {
    const month = months.slice(0, 2);
    const day = months.slice(3, 5);
    switch (month) {
      case "01":
        return `${day} يناير`;
      case "02":
        return `${day} فبراير`;
      case "03":
        return `${day} مارس`;
      case "04":
        return `${day} أبريل`;
      case "05":
        return `${day} مايو`;
      case "06":
        return `${day} يونيو`;
      case "07":
        return `${day} يوليو`;
      case "08":
        return `${day} أغسطس`;
      case "09":
        return `${day} سبتمبر`;
      case "10":
        return `${day} أكتوبر`;
      case "11":
        return `${day} نوفمبر`;
      case "12":
        return `${day} ديسمبر`;
      default:
        return months;
    }
  };