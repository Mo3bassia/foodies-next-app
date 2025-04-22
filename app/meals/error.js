"use client";
export default function error({ error }) {
  return (
    <main className="error">
      <h1>An error occured!</h1>
      <p>Error is {`"${error.message}"`}</p>
    </main>
  );
}
