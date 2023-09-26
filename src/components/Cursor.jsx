// import React from 'react';

// const Cursor = () => {
//   return (
//     <div
//       className='cursor'
//       style={{
//         position: 'fixed',
//         width: '16px',
//         height: '16px',
//         borderRadius: '50%',
//         backgroundColor: 'white', // Change the background color to your preferred cursor color
//         pointerEvents: 'none',
//         zIndex: 9999,
//         transform: 'translate(-50%, -50%)', // Center the cursor on the mouse position
//       }}
//     />
//   );
// };

// export default Cursor;









import { useEffect, useState } from 'react';

const Cursor = () => {
  const [mousePositions, setMousePositions] = useState([]);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePositions((prevPositions) => [
        { x: e.clientX, y: e.clientY },
        ...prevPositions.slice(0, 0), // add the number of last positions you want positions
      ]);
    };

    const handleMouseMove = (e) => {
      setIsMoving(true);
      requestAnimationFrame(() => {
        updateMousePosition(e);
        setIsMoving(false);
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorStyles = {
    position: 'fixed',
    width: '20px',
    height: '20px',
    borderRadius: '40%',
    // backgroundColor: 'rgba(25, 25, 25, 0.5)',
    backgroundColor: 'blue',
    pointerEvents: 'none',
    zIndex: 9999,
    transform: 'translate(-50%, -50%)',
  };

  const duplicateCursorStyles = {
    ...cursorStyles,
    transform: `scale(${isMoving ? 2.0 : 1})`,
    transition: 'transform 0.02s ease',
    animation: `${isMoving ? 'pulse 0.5s infinite' : ''}`,
  };

  return (
    <>
      {mousePositions.map((position, index) => (
        <div
          className='cursor'
          key={index}
          style={{
            ...duplicateCursorStyles,

            transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${1 + 0.02 * (mousePositions.length - index)})`,

            // opacity: 1 - 0.1 * (mousePositions.length - index),
          }}
        />
      ))}
    </>
  );
};

export default Cursor;

