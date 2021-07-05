package ru.test;

import org.springframework.stereotype.Component;

public interface Music {
    String getSong();
}

class ClassicalMusic implements Music {
    @Override
    public String getSong() {
        return "Лебединное озеро";
    }
}

class RockMusic implements Music {
    @Override
    public String getSong() {
        return "Группа крови";
    }
}

class DiscoMusic implements Music {
    @Override
    public String getSong() {
        return "Boney M";
    }
}
