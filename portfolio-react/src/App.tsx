import "./App.css";

type AppProps = {
  theme: string;
  source: string;
};

export default function App({ theme, source }: AppProps) {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>React Mindset</h1>
      <p>
        Theme from host: <strong>{theme}</strong>
      </p>
      <p>
        Loaded via: <strong>{source}</strong>
      </p>
    </div>
  );
}

