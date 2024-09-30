package com.portal.dados;

import java.util.Scanner;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class DadosController {
	Scanner sc = new Scanner(System.in);
	public String [] servidores = {};
	@GetMapping("/healthcheck")
	public String getHealthCheck() {
		return "OK!";
	}
	
	@GetMapping("/{}")//TODO pegar nomes das abas
	public void getServidor(@PathVariable String servidor) {
		
	}
}
