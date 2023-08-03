<h1 align="center"> Chave SSh git hub p/ Deploy </h1>

<h3> comando para gera key </h3>

<li>ssh-keygen -t rsa -f "/caminho/caminho/caminho/.ssh/github" -C "email"

<li>ssh-keygen -t rsa -C mas e-mail

<p style="font-size:18px;"> ativar key
<li> eval "$(ssh-agent -s)"

<p> adicionar
<li> ssh add + chave  "/caminho/caminho/caminho/.ssh/github"

<p> comando git 
<li>git add -> adiciona ao repo e . seria all 
<li>git commit -m "" -> adiciona msg primeiros initial
<li>git branch -> cria ou mostra branch atual
<li>git remote add origin -> repositorio local ou remoto 
<li>git push origin master/main/branch que esta utilizando 
<li>git push origin master/main/branch  -u  para proxima alteração so utilizar comando git push + branch/master/main 

<h2> Observação :</h2>
<p> quando voce fecha gitbash utilizando SSH,você não poderar fazer alteração ou  modificar 
utilize os comando seguinte toda vez que fechar:
<li> eval "$(ssh-agent -s)"
<li>ssh-add /c/Users/seu-usuario/.ssh/nome-chave

<p> agora poderar usar normalmente