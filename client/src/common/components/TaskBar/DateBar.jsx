import { useState, useEffect } from "react";

export default function DateBar() {
  var [now, setNow] = useState(Date.now());
  var [completeDate, setCompleteDate] = useState(true);

  function formatTime(ms) {
    var date = new Date(ms);
    const hours = date.getHours(); // 3,600 seconds in 1 hour
    const minutes = date.getMinutes(); // 60 seconds in 1 minute
    var hh = hours;
    var mm = minutes;
    if (hh < 10) hh = `0${hours}`;
    if (mm < 10) mm = `0${minutes}`;

    return `${hh}:${mm}`;
  }
  function formatDate(ms) {
    var date = new Date(ms);
    var day = String(date.getDate()).padStart(2, "0");
    var month = formatMonth(date.getMonth() + 1);
    var yyyy = date.getFullYear();
    const hours = date.getHours(); // 3,600 seconds in 1 hour
    const minutes = date.getMinutes(); // 60 seconds in 1 minute
    var hh = hours;
    var mm = minutes;
    if (hh < 10) hh = `0${hours}`;
    if (mm < 10) mm = `0${minutes}`;
    return `${day} ${month} ${yyyy} ${hh}:${mm}`;
  }
  function formatMonth(month) {
    console.log(month);
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setInterval(() => {
        setNow(Date.now());
      }, 1000 * 60);
    }
  }, []);
  return (
    <>
      {completeDate ? (
        <div
          className="fadeIn cursor-pointer p-1.5 px-2.5 transition-all duration-500 dark:hover:bg-white/[.1] hover:bg-gray-900/[.2] rounded-3xl 
  text-center items-center"
          id="time"
          data-tooltip-target="tooltip-date"
          onClick={() => setCompleteDate(!completeDate)}
        >
          {formatDate(now)}
        </div>
      ) : (
        <div
          className="fadeIn cursor-pointer p-1.5 px-2.5 transition-all duration-500 dark:hover:bg-white/[.1] hover:bg-gray-900/[.2] rounded-3xl 
  text-center items-center"
          id="time"
          data-tooltip-target="tooltip-date"
          onClick={() => setCompleteDate(!completeDate)}
        >
          {formatTime(now)}
        </div>
      )}
    </>
  );
}
