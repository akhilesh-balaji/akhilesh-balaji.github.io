import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <button class="btn" id="decrement" onClick={() => props.count.value -= 1}>
        -1
      </button>
      <p class="text-3xl tabular-nums">{props.count}</p>
      <button class="btn" id="increment" onClick={() => props.count.value += 1}>
        +1
      </button>
    </div>
  );
}
