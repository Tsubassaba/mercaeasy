
import React from 'react';

interface ImagePlaceholderProps {
  width: number;
  height: number;
  text?: string;
}

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ width, height, text = 'Image Placeholder' }) => {
  const style: React.CSSProperties = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: '#ccc',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#666',
    fontSize: '16px',
    border: '1px solid #999',
  };

  return (
    <div style={style}>
      <span>{text}</span>
    </div>
  );
};

export default ImagePlaceholder;
