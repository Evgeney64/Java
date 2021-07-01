package ru.test;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Configuration
//@ComponentScan("ru.test")
//@PropertySource("")
public class Config {

    @Bean
    public ClassicalMusic classicalMusicId() {
        return new ClassicalMusic();
    }

    @Bean
    public RockMusic rockMusicId() {
        return new RockMusic();
    }

    @Bean
    public MusicPlayer musicPlayerId() {
        return new MusicPlayer(classicalMusicId(), rockMusicId());
    }

    @Bean
    public Computer computerId() {
        return new Computer(musicPlayerId());
    }
}
