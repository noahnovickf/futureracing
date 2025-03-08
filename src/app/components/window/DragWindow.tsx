'use client';
import '98.css';
import { useState, useRef, useEffect, ReactNode } from 'react';
import styles from './DragWindow.module.css';

const DragWindow = ({
  children,
  header,
  coordinates,
  width = 400,
  height = 400,
}: {
  children: ReactNode;
  header: string;
  coordinates: { x: number; y: number };
  width?: number;
  height?: number;
}) => {
  const [position, setPosition] = useState(coordinates);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  // Handle mouse down on the title bar to start dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (windowRef.current) {
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  // Handle mouse move to update position while dragging
  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && windowRef.current) {
      const windowWidth = windowRef.current.offsetWidth;
      const windowHeight = windowRef.current.offsetHeight;
      const headerHeight = 0; // Adjust this value based on your header height

      // Calculate new position
      let newX = e.clientX - dragOffset.x;
      let newY = e.clientY - dragOffset.y;

      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Constrain X position
      newX = Math.max(0, Math.min(newX, viewportWidth - windowWidth));

      // Constrain Y position (keep below header and above bottom of viewport)
      newY = Math.max(
        headerHeight,
        Math.min(newY, viewportHeight - windowHeight),
      );

      setPosition({
        x: newX,
        y: newY,
      });
    }
  };

  // Handle mouse up to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add and remove event listeners
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  return (
    <div
      ref={windowRef}
      className="window"
      style={{
        width: width,
        maxHeight: height,
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: isDragging ? 1000 : 1,
      }}
    >
      <div
        className={`title-bar ${styles.titleBar}`}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
        onMouseDown={handleMouseDown}
      >
        <div className="title-bar-text">{header}</div>
        <div className="title-bar-controls">
          <button aria-label="Close" disabled />
        </div>
      </div>
      {children}
    </div>
  );
};

export default DragWindow;
