package com.company;

import java.awt.* ;
import java.awt.event.* ;
import java.applet.*;

public class WindowApplet extends Applet{
    Frame fr;
    public void init(){
        fr = new AppletFrame("Окно (AppletFrame)");
        fr.setSize(800, 400);
        fr.setVisible(true);
    }
    public void start(){
        fr.setVisible(true);
    }
    public void stop(){
        fr.setVisible(false);
    }
    public void paint(Graphics gr){
        gr.drawString("Новый апплет", 10, 20);
    }
}

class AppletFrame extends Frame {

    public AppletFrame(String title){
        super(title);

        AdapterFrame adapter = new AdapterFrame(this);
        addWindowListener(adapter);
    }
}

class AdapterFrame extends WindowAdapter{
    AppletFrame appletFrame;
    public AdapterFrame(AppletFrame _appletFrame){
        appletFrame = _appletFrame;
    }
    public  void windowClosing(WindowEvent we){
        appletFrame.setVisible(false);
    }
}

