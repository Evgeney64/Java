package ru.test;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestMain {
	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(
				"appContext.xml");

		Music music = context.getBean("testMusicId", Music.class);
		MusicPlayer player = new MusicPlayer(music);
		player.playMusic();

		context.close();
	}

}
