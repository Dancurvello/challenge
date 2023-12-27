package org.example;

import org.example.service.serviceFibonacci;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Bem-vindo à aplicação Fibonacci!");

        if (isRunningInDocker()) {
            // Executar lógica de Docker
            dockerLogic();
        } else {
            // Executar lógica padrão
            defaultLogic();
        }
    }

    private static boolean isRunningInDocker() {
        String env = System.getenv("DOCKER_ENV");
        return "true".equalsIgnoreCase(env);
    }

    private static void dockerLogic() {
        try {
            int maxNumero = readUserInput("Digite o número máximo para a sequência de Fibonacci: ");
            serviceFibonacci.calcularFibonacci(maxNumero);
        } catch (Exception e) {
            System.out.println("Erro ao obter entrada do usuário: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private static void defaultLogic() {
        try {
            int maxNumero = readUserInput("Digite o número máximo para a sequência de Fibonacci: ");
            serviceFibonacci.calcularFibonacci(maxNumero);
        } catch (Exception e) {
            System.out.println("Erro ao obter entrada do usuário: " + e.getMessage());
            e.printStackTrace();
        }
    }

    private static int readUserInput(String prompt) {
        Scanner scanner = new Scanner(System.in);

        // Verifica se há um terminal interativo disponível
        if (System.console() != null) {
            System.out.print(prompt);
            return Integer.parseInt(System.console().readLine());
        } else {
            System.out.print(prompt);
            return scanner.nextInt();
        }
    }
}
