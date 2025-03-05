//in useEffect we can use external files 

import { useRef, useEffect } from 'react';

export default function Box() {
  const ref = useRef(null);

  useEffect(() => {
    const div = ref.current;
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        document.body.style.backgroundColor = 'violet';
        document.body.style.color = 'black';
      } else {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
      }
    }, {
       threshold: 6
    
    });
    observer.observe(div);
    return () => {
      observer.disconnect();
    }
  }, []);

  return (
    <div ref={ref} style={{
      margin: 20,
      height: 100,
      width: 100,
      border: '2px solid red',
      backgroundColor: 'green'
    }} />
  );
}
