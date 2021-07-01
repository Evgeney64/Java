package ru.test;

public class MusicPlayer {
    private Music music;

    // IoS
    public  MusicPlayer(Music _music){
        music = _music;
    }

    public void playMusic(){
        System.out.println("Playing :" + music.getSong());
    }
}
