"use client";
import { useFormStatus } from "react-dom";

export default function MealsShareBtn() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} type="submit">
      {!pending ? "Share Meal" : "Submitting..."}
    </button>
  );
}
