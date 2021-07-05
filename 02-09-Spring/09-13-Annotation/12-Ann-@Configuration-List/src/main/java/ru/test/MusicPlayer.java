package ru.test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import javax.xml.ws.RequestWrapper;
import java.util.ArrayList;
import java.util.List;

public class MusicPlayer {

    private List<Music> musics = new ArrayList<>();
    public MusicPlayer(List<Music> musics)
    {
        this.musics = musics;
    }

    public String playMusic() {
        String str = "";
        for (Music music : musics) {
            str += "\nPlaying : " + music.getSong();
        }
        return str;
    }
}
