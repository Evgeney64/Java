package ru.test;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

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
    public DiscoMusic discoMusicId() {
        return new DiscoMusic();
    }

    @Bean
    public List<Music> musicIds() {
//        List<Music> musics = new ArrayList<>();
//        musics.add(classicalMusicId());
//        musics.add(rockMusicId());
//        musics.add(discoMusicId());
//        return musics;
        return Arrays.asList(classicalMusicId(), rockMusicId(), discoMusicId());
    }

    @Bean
    public MusicPlayer musicPlayerId() {
        return new MusicPlayer(musicIds());
    }

    @Bean
    public Computer computerId() {
        return new Computer(musicPlayerId());
    }
}
