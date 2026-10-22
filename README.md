# Mini Quiz Course Project

A small TypeScript quiz built for Advanced JavaScript and TypeScript course.

## Theme: Which Coffee Are You?

The quiz matches a person to a coffee based on how they start their morning. The first question asks what you do when your 7 a.m. alarm goes off, and each choice is worth points that point toward a result.

| Choice                        | Points |
| ----------------------------- | ------ |
| Jump up and start the day     | 3      |
| Snooze twice, then get up     | 2      |
| Pull the blanket over my head | 1      |

The example result is **Espresso**: fast, bold, and always ready to go.

## What I Built

- `Choice` and `Question` interfaces that describe a quiz question and its answers
- An `Outcome` interface (title and description) for the result card
- A typed question with three choices, each with points
- A hard-coded answer that picks a choice and prints it with its points
- A result card printed with a template literal

All of this is in [`src/index.ts`](src/index.ts).

## How to Run

```bash
npm install
npx tsx src/index.ts
```

## How to Type-Check

```bash
npx tsc --noEmit
```

## Example Output

```text
It's 7 a.m. and your alarm goes off. What do you do?
You chose Jump up and start the day (3 points)
Espresso
Fast, bold, and always ready to go.
```
