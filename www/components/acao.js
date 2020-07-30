
$(document).on("click","buscar",function(){
  $.ajax({
type:"get",//como vou enviar
url:"https://viacep.com.br/ws/"+$("#cep").val+"/json",
success: function(data){
var conteudo;
conteudo = "<p><strong>Logradouro:</strong>"+data.logradouro+"</p>";
conteudo += "<p><strong>Bairro:</strong>"+data.bairro+"</p>";
conteudo += "<p><strong>Uf:</strong>"+data.uf+"</p>";
conteudo += "<p><strong>Cidade:</strong>"+data.localidade+"</p>";

$("dados").html(conteudo);
},
error: function(){
  alert("deu ruim");
}

  });
})
