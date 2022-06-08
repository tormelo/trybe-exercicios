const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'C#'
]

const createHeader = (name) => `Tryber ${name} aqui!`;
const createText = (header) => {
  const skillsSorted = skills.sort();
  let text = `${header}
  Minhas cinco principais habilidades são:
  `;

  for (const skill of skillsSorted) {
    text = `${text}
    - ${skill}`;
  }

  text = `${text}

  #goTrybe.`;

  return text;
};

console.log(createText(createHeader('Bebeto')));