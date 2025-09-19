const mongoose = require('mongoose');

const contatoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, 'O nome é obrigatório']
  },
  email: {
    type: String,
    required: [false]
  },
  endereco: {
    type: String,
    required: [false]
  },
  telefone: {
    type: String,
    required: [false]
  },
  foto: {
    type: String, // Pode ser uma URL ou caminho de arquivo
    required: [false]
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Usuario', 
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Contato', contatoSchema, 'contatos'); // 'contatos' é o nome da coleção no MongoDB
