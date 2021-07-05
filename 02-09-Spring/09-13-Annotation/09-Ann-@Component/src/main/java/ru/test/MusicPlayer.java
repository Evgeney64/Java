package ru.test;

import java.util.ArrayList;
import java.util.List;

public class MusicPlayer {

    private List<Music> musicList = new ArrayList<>();
    public void setMusicList(List<Music> musicList) { this.musicList = musicList; }

    private String name;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    private int volume;
    public int getVolume() { return volume; }
    public void setVolume(int volume) { this.volume = volume; }

    // IoS
    public  MusicPlayer(){ }

    public void playMusic(){
        for (Music music: musicList) {
            System.out.println("Playing : " + music.getSong());
        }
    }
}
