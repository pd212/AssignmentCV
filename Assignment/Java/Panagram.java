// Check if the input is pangram or not. (Pangram is a sentence that contains all the alphabet from a-z)

package Java;

import java.util.Scanner;

public class Panagram {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter a sentence: ");
        String str = s.nextLine();
        boolean flag = true;
        for (int i=0; i<26; i++) {
            char c = (char)(i+'a');
            if (!str.toLowerCase().contains(Character.toString(c))) {
                flag = false;
                break;
                }
                }
                if (flag == true){
                    System.out.println("The entered string is a Pangram");
                } 
                else{
                        System.out.println("The entered string is not a Pangram");
                    }

    }
}
