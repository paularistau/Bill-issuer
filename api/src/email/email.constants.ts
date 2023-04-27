import * as fontkit from 'fontkit';

export const fonts = {
  Arial: {
    // normal: fontkit.openSync('Arial.ttf'),
    // bold: fontkit.openSync('Arial-Bold.ttf'),
  },
};

// Configuração das cores
export const colors = {
  darkGray: '#333333',
  lightGray: '#999999',
};

export const boletoData = {
  valor: 100.0,
  vencimento: new Date('2023-05-10'),
  beneficiario: {
    nome: 'Empresa XYZ LTDA',
    cnpj: '12.345.678/0001-00',
    endereco: 'Rua da Empresa, 123 - Bairro da Empresa',
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '12345-678',
  },
  pagador: {
    nome: 'João da Silva',
    cpf: '123.456.789-10',
    endereco: 'Rua do Pagador, 456 - Bairro do Pagador',
    cidade: 'Rio de Janeiro',
    estado: 'RJ',
    cep: '54321-876',
  },
  codigoBarras: '34191790010109771234567890000000123456789010',
};
