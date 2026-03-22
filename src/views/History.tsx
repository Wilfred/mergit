import React from "react";
import { Layout } from "./Layout";

interface Merge {
  title: string;
}

export function History({ merges }: { merges: Merge[] }) {
  return (
    <Layout title="History — Mergit">
      <h1>Merge History</h1>
      <p className="subtitle">Log of completed merges.</p>

      <div className="card">
        {merges.length === 0 ? (
          <p className="empty">No merges recorded yet.</p>
        ) : (
          <ul className="pr-list">
            {merges.map((m, i) => (
              <li key={i}>{m.title}</li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
