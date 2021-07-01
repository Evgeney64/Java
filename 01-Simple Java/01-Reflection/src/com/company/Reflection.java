package com.company;

import java.lang.annotation.Annotation;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.IllegalArgumentException;
import java.util.*;
import java.util.stream.Collectors;

class Reflection {

    void getReflection() throws IllegalAccessException {
        Person person = new Person("Роев", "Евгений", "Вячеславович", new Date(64, 4, 6));

        Class<?> type = person.getClass();
        getTypeAnnotations(type);
        getTypeFields(type, person);

        Method[] methods = type.getMethods();
        if (methods.length > 0 )
        {
            System.out.println("\n");
            System.out.println("Class methods [" + methods.length + "] ------------------------------");

            for (Method method : methods) {
                getMethodAnnotations(method);
                getMethodParams(method);
                if (method.getAnnotations().length > 0)
                    System.out.println("");
            }
        }
    }

    void getTypeAnnotations(Class<?> type){
        Annotation type_annotations[] = type.getAnnotations();
        if (type_annotations.length > 0 ) {
            System.out.println("");
            for (Annotation anno : type_annotations) {
                System.out.println(anno);
            }
        }
    }

    void getTypeFields(Class<?> type, Person person) throws IllegalAccessException {
        Field[] fields = type.getFields();
        if (fields.length > 0)
        {
            System.out.println("Class fields [" + fields.length + "] ------------------------------");
            for (Field field : fields) {
                Class<?> fld = field.getType();
                String field_value = "- " + field.getName() + " [" + fld.getName() + "]";

                Object value = null;
                value = field.get(person);
                if (value == null)
                    field_value += " = null";
                else
                    field_value += " = " + value.toString();

                System.out.println(field_value);
            }
        }
    }

    void getMethodAnnotations(Method method) {
        Annotation method_annotations[] = method.getAnnotations();
        if (method_annotations.length > 0 ) {
            for (Annotation anno : method_annotations) {
                System.out.println(anno);
                switch (anno.annotationType().getName()) {
                    case "com.company.What": {
                        What ann = method.getAnnotation(What.class);
                        System.out.println("   - description = [" + ann.description() + "]");
                    }
                    break;
                    case "com.company.MyAnno": {
                        MyAnno ann = method.getAnnotation(MyAnno.class);
                        System.out.println("   - str = [" + ann.str() + "]");
                        System.out.println("   - val = [" + ann.val() + "]");
                    }
                    break;
                }
            }
        }
    }

    void getMethodParams(Method method) {
        Class<?>[] param_types = method.getParameterTypes();
        String params_str = "";
        if (param_types.length > 0 ) {
            for (Class<?> param_type : param_types) {
                if (params_str != "")
                    params_str += ",";
                params_str += param_type.getName();
            }
        }
        System.out.println("- " + method.getReturnType() + " " + method.getName() + " (" + params_str + ")");

    }
}
