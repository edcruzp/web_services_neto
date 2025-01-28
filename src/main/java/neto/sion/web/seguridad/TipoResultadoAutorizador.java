package neto.sion.web.seguridad;

public enum TipoResultadoAutorizador {
	USUARIO_CORRECTO(      Integer.valueOf(0),  "Usuario y contrasecorrectos"),
	USU_PASS_INCORRECTO(   Integer.valueOf(1),  "y/o contraseincorrecto !"),
	NO_REGISTRADO_CENTRAL( Integer.valueOf(2),  "y/o contraseincorrecto !"),
	CAPTCHA_INCORRECTO(    Integer.valueOf(3),  "caracteres no coinciden con la imagen !"),
	ERROR_PASS( 		   Integer.valueOf(5),  "Ocurriun error al verificar la contraseIntnuevamente."),
	ERROR_SESION( 		   Integer.valueOf(7),  "Ocurriun error al crear la sesidel usuario. Intnuevamente."),
	SIN_PERMISOS(		   Integer.valueOf(8),  "No tiene permisos para ingresar al sistema !!!"),
	ERROR_DESCONOCIDO(	   Integer.valueOf(-1), "Ha ocurrido un error desconocido. Intnuevamente.");
	
	private Integer codigo;
	private String descripcion;

	private TipoResultadoAutorizador(Integer codigo, String descripcion)
	{
		this.setCodigo(codigo);
		this.setDescripcion(descripcion);
	}
	
	public Integer getCodigo() {
		return codigo;
	}

	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
}
