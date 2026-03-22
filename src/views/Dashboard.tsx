import React from "react";
import { Layout } from "./Layout";

interface QueueItem {
  title: string;
}

export function Dashboard({ queue }: { queue: QueueItem[] }) {
  return (
    <Layout title="Dashboard — Mergit">
      <h1>Merge Queue</h1>
      <p className="subtitle">Pull requests waiting to be merged.</p>

      <div className="card">
        {queue.length === 0 ? (
          <p className="empty">No pull requests in the queue.</p>
        ) : (
          <ul className="pr-list">
            {queue.map((pr, i) => (
              <li key={i}>{pr.title}</li>
            ))}
          </ul>
        )}
      </div>
    </Layout>
  );
}
