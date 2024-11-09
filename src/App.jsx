// src/App.jsx
import React, { useState } from 'react';
import Button from './Button'; // Импортируем компонент Button
import 'bootstrap/dist/css/bootstrap.min.css'; // Подключаем стили Bootstrap

function App() {
  const [count, setCount] = useState(0);

  // Функция для увеличения счётчика
  const increment = () => setCount(count + 1);

  return (
    <div className="App" style={{ textAlign: 'center', padding: '20px' }}>
     

      {/* Использование компонента Button с разными props */}
      <Button label="Primary" variant="primary" onClick={increment} />
      <Button label="Secondary" variant="secondary" onClick={increment} />
      <Button label="Success" variant="success" onClick={increment} />
      <Button label="Danger" variant="danger" onClick={increment} />
      <Button label="Warning" variant="warning" onClick={increment} />
      <Button label="Info" variant="info" onClick={increment} />
      <Button label="Light" variant="light" onClick={increment} />
      <Button label="Dark" variant="dark" onClick={increment} />

      
    </div>
  );
}

export default App;

