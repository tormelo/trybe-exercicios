const nomePeca = 'BisPo'

switch (nomePeca.toLowerCase()) {
  case 'rei':
    console.log('Rei - 1 casa em qualquer direção');
    break;
  case 'rainha':
    console.log('Rainha - n casas em qualquer direção');
    break;
  case 'bispo':
    console.log('Bispo - n casas em alguma diagonal');
    break;
  case 'cavalo':
    console.log('Cavalo - movimento em L');
    break;
  case 'torre':
    console.log('Torre - n casas em direções ortogonais');
    break;
  case 'peão':
    console.log('Peão - 1 casa para frente');
    break;
  default:
    console.log('Nome de peça inválido');
}