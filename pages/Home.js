import Hello from "../components/Hello";
import ContentSummarizer from "../components/ContentSummarizer";

export default function Home() {
  return (
    <div>
      <h1>这是来自函数的内容</h1>
      <Hello />
      <h2>内容总结工具</h2>
      <ContentSummarizer />
    </div>
  );
}