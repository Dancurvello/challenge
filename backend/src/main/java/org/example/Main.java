package org.example;

import org.example.service.serviceFibonacci;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Bem-vindo à aplicação Fibonacci!");

        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o número máximo para a sequência de Fibonacci: ");
        int maxNumero = scanner.nextInt();

        serviceFibonacci.calcularFibonacci(maxNumero);

        scanner.close();
    }
}
