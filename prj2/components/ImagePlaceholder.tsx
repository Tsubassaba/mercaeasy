
import React from 'react';

interface ImagePlaceholderProps {
  caption: string;
  className?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ caption, className = '' }) => {
  return (
    <div className={`bg-slate-100 rounded-xl shadow-inner flex flex-col items-center justify-center text-center p-4 border border-slate-200/80 ${className}`}>
      <div className="text-slate-500 text-sm font-medium">画像を配置予定</div>
      <div className="text-slate-400 text-xs mt-1 max-w-[90%]">{caption}</div>
    </div>
  );
};

export default ImagePlaceholder;
