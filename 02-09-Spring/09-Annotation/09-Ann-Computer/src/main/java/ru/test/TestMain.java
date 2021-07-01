package ru.test;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestMain {
	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(
				"appContext.xml");

		Computer computer = context.getBean("computerId", Computer.class);
		System.out.println(computer);

		context.close();
	}

}
