package ru.test;

public interface Music {
    String getSong();
}

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

//class RockMusic implements Music {
//    @Override
//    public String getSong() {
//        return "Группа крови";
//    }
//}
//
//class DiscoMusic implements Music {
//    @Override
//    public String getSong() {
//        return "Boney M";
//    }
//}
