function Posts(){
  this.estados=[];
  this.agregar=function(posts){
    //alert("muestra"+posts);
    this.estados.push(posts);
  };
  this.mostrar=function(){
    this.estados.forEach(function(posts){
      posts.mostrar();
    },this);
  };
}
document.getElementById('btnPublica').onclick=function(e){
  var publicacion=document.getElementById('publicacion').value;
  var contenidos=document.getElementById('contenidos');

  if (publicacion.length==0){
    alert("Debe ingresar alguna publicacion");
    return false;
  }else {
    //alert("ai");
    contenidos.appendChild(creaPost(publicacion));
  }
  e.preventDefault();
}
function creaPost(texto){
  var post=document.createElement('div');
  var txt=document.createElement('p');
  txt.innerHTML=texto;
  var edita=document.createElement('a');
  var elimina=document.createElement('a');

  edita.innerHTML="Editar";
  edita.setAttribute("href","#");
  elimina.innerHTML="Eliminar";
  elimina.setAttribute("href","#");
  elimina.addEventListener('click',function(e){
    e.preventDefault();
    var postParent=e.target.parent;
  });
  post.appendChild(txt);
  post.appendChild(edita);
  post.appendChild(elimina);
  var bdPosts=new Posts();
  bdPosts.agregar(post);
  bdPosts.mostrar();
  //alert(post);
  return post;
}
