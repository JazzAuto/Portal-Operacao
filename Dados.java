package com.portal.dados;

public class Dados {
	
	private String id;
	private String status;
	private String local;
	private long horaDoAlerta;
	private long ultimaExtracao;
	
	public Dados(String id, String status, String local, long horaDoAlerta, long ultimaExtracao) {
		this.id=id;
		this.status=status;
		this.local=local;
		this.horaDoAlerta=horaDoAlerta;
		this.ultimaExtracao=ultimaExtracao;
	}
	
	@Override
	public String toString() {
		return String.format(
				"Dado[id='%s', status='%s', local='%s', horaDoAlerta=%d, ultimaExtracao=%d]",
				id, status, local, horaDoAlerta, ultimaExtracao);
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getLocal() {
		return local;
	}
	public void setLocal(String local) {
		this.local = local;
	}
	public long getHoraDoAlerta() {
		return horaDoAlerta;
	}
	public void setHoraDoAlerta(long horaDoAlerta) {
		this.horaDoAlerta = horaDoAlerta;
	}
	public long getUltimaExtracao() {
		return ultimaExtracao;
	}
	public void setUltimaExtracao(long ultimaExtracao) {
		this.ultimaExtracao = ultimaExtracao;
	}
}
