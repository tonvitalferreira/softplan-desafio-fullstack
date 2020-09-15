package com.process.api.util;

import java.util.Calendar;
import java.util.Date;

public class DateTime {

    public static Date getCurrentTimePlusDay(int days) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.add(Calendar.DATE, days);
        return calendar.getTime();
    }

    public static Date getCurrentTimePlusSeconds(int seconds) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.add(Calendar.SECOND, seconds);
        return calendar.getTime();
    }

    public static Date getCurrentTimePlusMinutes(int minutes) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(new Date());
        calendar.add(Calendar.MINUTE, minutes);
        return calendar.getTime();
    }

    public static boolean isBefore(Date date) {
        return new Date().before(date);
    }
}
