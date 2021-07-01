package ru.test;

import org.springframework.stereotype.Component;

public interface Music {
    String getSong();
}

//@Component("classicalMusicId")
class ClassicalMusic implements Music {
    @Override
    public String getSong() {
        return "Лебединное озеро";
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
