import "@/styles/globals.css";
import "../page.css";
import Layout from "@/components/Layout";
import { TaskProvider } from "@/lib/TaskContext";

export default function App({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TaskProvider>
  );
}
