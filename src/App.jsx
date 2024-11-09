import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Импортируем стили Bootstrap
import './App.css';  // Подключаем стили

function App() {
  return (
    <div className="App">
     
      
      {/* Контейнер для кнопок с flexbox */}
      <div className="button-container">
        <button type="button" className="btn btn-primary">Primary</button>
        <button type="button" className="btn btn-secondary">Secondary</button>
        <button type="button" className="btn btn-success">Success</button>
        <button type="button" className="btn btn-danger">Danger</button>
        <button type="button" className="btn btn-warning">Warning</button>
        <button type="button" className="btn btn-info">Info</button>
        <button type="button" className="btn btn-light">Light</button>
        <button type="button" className="btn btn-dark">Dark</button>
        <button type="button" className="btn btn-link">Link</button>
      </div>
    </div>
  );
}

export default App;
