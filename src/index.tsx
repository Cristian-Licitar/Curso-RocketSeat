import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    //Toda chamada que eu fizer tendo /api depois de http://localhost:3000 deve passar pelo MirageJs
    this.namespace = 'api';
    //toda chamada que eu fizer tendo http://localhost:3000/api/transactions
    this.get('/transactions', () => [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    )
  }
});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

