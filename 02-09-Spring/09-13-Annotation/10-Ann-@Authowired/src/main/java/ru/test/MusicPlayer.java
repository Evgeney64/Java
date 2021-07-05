package ru.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import javax.xml.ws.RequestWrapper;
import java.util.ArrayList;
import java.util.List;

@Component("musicPlayerId")
public class MusicPlayer {

//    @Autowired /* Внедрение через поле */
    private Music music;
    @Autowired /* Внедрение через коструктор интерфейса */
    public MusicPlayer(Music music){
        this.music = music;
    }

    private ClassicalMusic classicalMusic;
//    @Autowired /* Внедрение через коструктор одного класса */
    public MusicPlayer(ClassicalMusic classicalMusic){
        this.classicalMusic = classicalMusic;
    }

    private RockMusic rockMusic;
//    @Autowired /* Внедрение через коструктор нескольких классов */
    public MusicPlayer(ClassicalMusic classicalMusic, RockMusic rockMusic){
        this.classicalMusic = classicalMusic;
        this.rockMusic = rockMusic;
    }

//    @Autowired /* Внедрение через setter*/
    public void setMusic(Music music) {
        this.music = music;
    }

    public void playMusic() {
        if (music != null)
            System.out.println("Playing : " + music.getSong());
        if (classicalMusic != null)
            System.out.println("Playing : " + classicalMusic.getSong());
        if (rockMusic != null)
            System.out.println("Playing : " + rockMusic.getSong());
    }
}
