package com.portal.dados;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class PortalDadosApplication implements CommandLineRunner{
	
	private static final Logger log = 
	LoggerFactory.getLogger(PortalDadosApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(PortalDadosApplication.class, args);
	}
	
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	@Override
	public void run(String... args) throws Exception {
		
		log.info("Executando Script");
		
		try {
		
//		jdbcTemplate.execute("DROP TABLE IF Arvores EXISTS");
//		jdbcTemplate.execute("CREATE TABLE Arvores (id INT PRIMARY KEY, nome VARCHAR(255)");
//		jdbcTemplate.execute("SELECT * FROM");  
//TODO adicionar conexão com o banco PRTG
		
		}catch (Exception e) {
			log.error("Erro ao executar Script!");
		}
		
		List<Object[]> separarHora = Arrays.asList("12:30:45", "08:15:20").stream()
                .map(hora -> hora.split(":"))
                .collect(Collectors.toList());

        separarHora.forEach(hora -> {
            if (hora.length == 3) {
                log.info(String.format("Alerta recebido as %s : %s : %s", hora[0], hora[1], hora[2]));
            } else {
                log.warn("Invalid time format received");
            }
		});
		
		//TODO adicionar o método post
	
	}
}
