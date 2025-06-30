export default function ExerciseCard({
  // ... existing code ...
  
  // 3. 声明收藏状态
  const [isFavorited, setIsFavorited] = useState(false);

  // 5. 切换收藏处理函数
  const handleToggleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    // ... existing code ...
    <button
      onClick={handleToggleFavorite}
      className={`px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200
        ${isFavorited 
          ? "bg-amber-500 text-white hover:bg-amber-600"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
    >
      {isFavorited ? "已收藏 ★" : "收藏 ☆"}
    </button>
    // ... existing code ...
  );
}
