package org.example.service;

public class serviceFibonacci {
    public static void calcularFibonacci(int maxNumero) {
        int num1 = 0, num2 = 1, nextTerm;

        System.out.println("Sequência de Fibonacci até " + maxNumero + ":");

        while (num1 + num2 <= maxNumero) {
            nextTerm = num1 + num2;
            System.out.print(nextTerm + " ");
            num1 = num2;
            num2 = nextTerm;
        }
    }
}
