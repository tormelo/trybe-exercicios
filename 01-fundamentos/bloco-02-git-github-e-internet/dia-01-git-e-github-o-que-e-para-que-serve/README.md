# O seu repositório no **_GitHub_**

Agora que você já é capaz de gerenciar localmente seus códigos e também enviá-los para o **_GitHub_**, é hora de colocar a casa em ordem!

Antes de começar, siga as instruções da página sobre Portfólio de Exercícios para criar a estrutura de diretórios que usará ao longo de todo o curso para guardar seus exercícios.

Durante seu curso na _Trybe_, seus projetos serão entregues através de `pushes` nos repositórios do **_GitHub_**. Para podermos simular um exercício feito, você criará um arquivo `.txt` com um nome de sua escolha (Exemplo: `trybe-skills.txt`) e utilizará o conteúdo abaixo.

    O que eu vou aprender na Trybe:
    
    - Unix
    - Bash
    - Git

No final, ao executar o comando `ls -l` na pasta de arquivos deste dia, você deverá receber um retorno parecido com:

    ls -l
    
    total 0
    -rw-r--r--  1 tryber  staff  0 Jan 27 00:34 trybe-skills.txt

Agora vamos transformar essa pasta em um repositório **_Git_**:

*   Retorne para a raiz da pasta de exercícios;
    
*   Inicialize o repositório com `git init`;
    
*   Crie um arquivo de `README` utilizando o comando `touch README.md`;
    
*   Crie um `commit` inicial utilizando:

        git add .
        git commit -m "Initial commit"

*   Vá até o seu _GitHub_ e [crie um repositório público](https://help.github.com/en/github/getting-started-with-github/create-a-repo), onde você irá guardar todos os exercícios que desenvolverá ao longo do curso;
    
    *   Dê ao repositório um nome descritivo, como por exemplo `trybe-exercicios`;
        
    *   ⚠️ Lembre-se de **não** inicializar o repositório com um arquivo `README.md`, pois você já criou um nos passos anteriores! 😉
        
*   Clique no botão **SSH** e então copie a _URL_ do repositório;
    
    *   Execute o comando para adicionar a _URL_ ao repositório local `git remote add origin "URL_DO_REPOSITÓRIO"`;
*   Verifique se tudo está certo com sua _URL_ remota utilizando o comando `git remote -v`. Seu terminal deve conter algo similar a isso:

        origin	git@github.com:john-snow/know-nothing.git (fetch)
        origin	git@github.com:john-snow/know-nothing.git (push)

*   Em que `john-snow` corresponde ao seu username e `know-nothing` ao nome que você deu ao seu repositório;
    
*   Agora que tudo está devidamente configurado e verificado, é hora de subir seu primeiro `commit` para o **_GitHub_**! 🤩
    
*   Execute o comando `git push origin master` no terminal;
    
*   Vá até o seu GitHub e verifique as novas alterações.
    

Agora que tal adicionar uma descrição do que é seu repositório no `README.md` ? 💪🏼.

*   O `README.md` que você recriou é referente ao repositório `trybe-exercicios`, tendo isso em mente é interessante que você adicione informações relacionadas ao curso da Trybe e o que você está desenvolvendo e o que irá desenvolver;
    
*   Uma outra coisa interessante a se fazer é adicionar um `README.md` dentro do **diretório de exercícios do dia** para colocar a descrição dos exercícios que você desenvolveu;
    
*   Lembre-se de fazer um _commit_ quando terminar de alterar os arquivos;
    
*   Depois do _commit_, faça sempre um _push_;
    
*   Confira as alterações no **GitHub**.