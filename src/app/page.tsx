import { Board, Header } from "@/components";

const initialTasks = [
  {
    id: 1,
    task: "Lavar as maos",
  },
  {
    id: 2,
    task: "fazer um bolo",
  },
  {
    id: 3,
    task: "Lavar a louça",
  },
  {
    id: 4,
    task: "Levar o lixo para fora",
    finished: true,
  },
];

export default function Home() {
  return (
    <main>
      <Header />
      <Board initialTasks={initialTasks} />
    </main>
  );
}
