package com.company;

import java.awt.* ;
import java.awt.event.* ;
import javax.swing.* ;
//import java.awt.applet.*;

public class WindowFrame extends JFrame {

    private JButton butt = new JButton("Выполнить");
    private JLabel lbl = new JLabel("Поле ввода");
    private JTextField txt = new JTextField("Значение");

    public WindowFrame(){
        super("Окно ввода");

        this.setBounds(100,100,800,400);
        this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        Container cont = this.getContentPane();
        cont.setLayout(new GridLayout(2, 2, 2, 2));

        cont.add(lbl);
        cont.add(txt);
        cont.add(butt);

        butt.addActionListener(new buttActionListener());
    }

    class buttActionListener implements ActionListener{

        public  void actionPerformed(ActionEvent e){

            String mess = "Выполнено успешно";
            JOptionPane.showMessageDialog(null, mess, "Модальное окно", JOptionPane.PLAIN_MESSAGE);
        }
    }
}
