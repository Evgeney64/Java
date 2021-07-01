package com.company;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.IllegalArgumentException;
import java.util.*;
import java.util.stream.Collectors;

class Collection {

    void getCollection() throws IllegalAccessException{
        ArrayList<Person> persons = new ArrayList<>();

        fillCollection(persons);
        execIterator(persons);

        return;
    }

    void fillCollection(ArrayList<Person> persons){
        Person person = new Person("Роев", "Вячеслав", "Петрович", new Date(41, 7, 6));
        persons.add(person);
        person = new Person("Роева", "Тамара", "Петровна", new Date(40, 6, 13));
        persons.add(person);
        persons.add(new Person("Роев", "Евгений", "Вячеславович", new Date(64, 4, 6)));
        persons.add(new Person("Роев", "Андрей", "Евгеньевич", new Date(86, 9, 27)));
        persons.add(new Person("Роева", "Маргарита", "Евгеньевна", new Date(90, 2, 5)));
        persons.add(new Person("Роева", "Алиса", "Андреевна", new Date(114, 9, 29)));
        persons.add(new Person("Роева", "Мила", "Андреевна", new Date(118, 7, 10)));
        persons.remove(2);
    }

    void execIterator(ArrayList<Person> persons){
        ListIterator<Person> iterator = persons.listIterator();

        // Forward (next)
        while(iterator.hasNext()) {
            Person pers = iterator.next();
            if (pers == null)
                break;
            pers.Fam += " - next";
            if (pers == null)
                break;
        }

        // Back (previous)
        while(iterator.hasPrevious()) {
            Person pers = iterator.previous();
            if (pers == null)
                break;
            pers.Fam += " - previous";
            if (pers == null)
                break;
        }

        for (Person pers : persons) {
            pers.Fam += " - foreach";
            if (pers == null)
                break;
        }
    }
}
