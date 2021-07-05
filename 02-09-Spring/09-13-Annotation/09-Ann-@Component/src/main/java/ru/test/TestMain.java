package ru.test;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestMain {
	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(
				"appContext.xml");

		ClassicalMusic classicalMusic = context.getBean("classicalMusicId", ClassicalMusic.class);
		System.out.println(classicalMusic.getSong());

		RockMusic rockMusic = context.getBean("rockMusicId", RockMusic.class);
		System.out.println(rockMusic.getSong());

		//		MusicPlayer player = context.getBean("musicPlayerId", MusicP layer.class);
//		player.playMusic();
//		System.out.println("-----------------------------------------");
//		System.out.println(player.getName());
//		System.out.println(player.getVolume());

		context.close();
	}

}
