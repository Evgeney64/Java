package ru.test;

import org.springframework.stereotype.Component;

public interface Music {
    String getSong();
}

@Component("classicalMusicId")
class ClassicalMusic implements Music {

    @Override
    public String getSong() {
        return "Лебединное озеро";
    }

    private ClassicalMusic(){}
    public static ClassicalMusic getClassicalMusic(){
        return new ClassicalMusic();
    }
    public void Init(){
        System.out.println(" - execute Init()");
    }
    public void Destroy(){
        System.out.println(" - execute Destroy()");
    }
}

//@Component("rockMusicId")
class RockMusic implements Music {
    @Override
    public String getSong() {
        return "Группа крови";
    }
}

//@Component("discoMusicId")
class DiscoMusic implements Music {
    @Override
    public String getSong() {
        return "Boney M";
    }
}
