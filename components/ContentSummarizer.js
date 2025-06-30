import { useState } from 'react';

export default function ContentSummarizer({ initialContent = '' }) {
  const [content, setContent] = useState(initialContent);
  const [summary, setSummary] = useState('');
  
  const handleSummarize = () => {
    // 简单的总结逻辑 - 可以替换为更复杂的AI总结算法
    const keyPoints = content.split('\n')
      .filter(line => line.trim().length > 0)
      .map(line => `• ${line.trim()}`);
    
    setSummary(`内容总结:\n${keyPoints.join('\n')}`);
  };

  return (
    <div>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="输入需要总结的内容..."
        rows={10}
        cols={50}
      />
      <button onClick={handleSummarize}>总结内容</button>
      <pre>{summary}</pre>
      <button onClick={() => {
        // 导出为文本文件
        const blob = new Blob([summary], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '内容总结.txt';
        a.click();
      }}>导出总结</button>
    </div>
  );
}