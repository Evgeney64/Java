package ru.test;

public class MusicPlayer {
    private Music music;
    public Music getMusic() {
        return music;
    }
    public void setMusic(Music music) {
        this.music = music;
    }

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
    public  MusicPlayer(Music music){
        this.music = music;
    }
    public  MusicPlayer(){ }


    public void playMusic(){
        System.out.println("Playing :" + music.getSong());
    }
}
