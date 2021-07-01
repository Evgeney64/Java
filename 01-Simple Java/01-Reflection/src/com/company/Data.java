package com.company;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

@Retention(RetentionPolicy.RUNTIME)
@interface MyAnno {
    String str();
    int val();
}

@Retention (RetentionPolicy.RUNTIME)
@interface What {
    String description();
}

class Men<T> extends Person<T>{
}
class Women<T> extends Person<T>{
}

@What(description = "class Person" )
@MyAnno (str = "Person", val = 1 )
class Person<T>
{
    public Person() { }
    public Person(String _Fam, String _Im, String _Ot, Date _date_bith) {
        Fam = _Fam;
        Im = _Im;
        Ot = _Ot;
        date_bith = _date_bith;

        Date today = new Date();
        age = today.getYear() - date_bith.getYear();

        Calendar calendar_bith = new GregorianCalendar();
        calendar_bith.set(_date_bith.getYear(), _date_bith.getMonth(), _date_bith.getDay());
        Calendar calendar_today = new GregorianCalendar();
    }
    public String Fam;
    public String Im;
    public String Ot;
    public int age;
    public Date date_bith;

    @What(description = "public int Sum(int x, int y)" )
    @MyAnno (str = "Sum", val = 11 )
    public int Sum(int x, int y)
    {
        return x + y;
    }

    @What(description = "public int Multiply(int x, int y)" )
    @MyAnno (str = "Multiply", val = 12 )
    public int Multiply(int x, int y)
    {
        return x * y;
    }
}


