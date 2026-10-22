interface Choice {
  label: string;
  points: number;
}

interface Question {
  text: string;
  choices: Choice[];
}

interface Outcome {
  title: string;
  description: string;
}

const question: Question = {
  text: "It's 7 a.m. and your alarm goes off. What do you do?",
  choices: [
    { label: "Jump up and start the day", points: 3 },
    { label: "Snooze twice, then get up", points: 2 },
    { label: "Pull the blanket over my head", points: 1 },
  ],
};

const outcome: Outcome = {
  title: "Espresso",
  description: "Fast, bold, and always ready to go.",
};

const answer = 0;

const picked = question.choices[answer];

console.log(question.text);
console.log(`You chose ${picked.label} (${picked.points} points)`);

console.log(`${outcome.title}\n${outcome.description}`);
