import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import { Model, createServer } from 'miragejs';

createServer({
  models:{
    transaction: Model
  },

  //serve para inicar o banco com alguns dados
  seeds(server){
    server.db.loadData({
      //o nome da tabela deve ser igual ao do banco mas no plural
      transactions: [
        {
          id: 1,
          name: 'Free lancer',
          type: 'deposit',
          value: 600,
          category: 'DEV',
          createdAt: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          name: 'aluguel',
          type: 'withdraw',
          value: 500,
          category: 'Casa',
          createdAt: new Date('2021-02-14 11:00:00')
        }
      ]
    })
  },

  routes() {
    //Toda chamada que eu fizer tendo /api depois de http://localhost:3000 deve passar pelo MirageJs
    this.namespace = 'api';
    //toda chamada que eu fizer tendo http://localhost:3000/api/transactions
    this.get('/transactions', () => {
      return this.schema.all('transaction');//retorno todos os dados que tenho dentro do banco transaction
    }
       
    );

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      //O primeiro paramêtro é o banco que crie no Model lá em cima, o segundo são os dados a serem salvos
      return schema.create('transaction', data);
    });
  }
});

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);

