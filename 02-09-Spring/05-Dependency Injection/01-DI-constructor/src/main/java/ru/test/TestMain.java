package ru.test;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestMain {
	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(
				"appContext.xml");

		MusicPlayer player = context.getBean("testMusicPlayerId", MusicPlayer.class);
		player.playMusic();

		context.close();
	}

}
