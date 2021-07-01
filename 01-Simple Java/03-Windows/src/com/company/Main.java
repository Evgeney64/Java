package com.company;

import javax.swing.*;
import java.awt.*;
import java.awt.image.ImageObserver;
import java.text.AttributedCharacterIterator;

public class Main {

    public static void main(String[] args) {
        if (1 == 2) {
            WindowFrame win = new WindowFrame();
            win.setVisible(true);
        }
        else {
            WindowApplet app = new WindowApplet();
            app.init();
            app.start();
            Graphics gr = new DebugGraphics();
            //app.paint(gr);
        }
	// write your code here
    }
}
