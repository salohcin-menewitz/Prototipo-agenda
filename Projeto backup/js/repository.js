function getAgendas() {
    return localStorage.getItem('agendas') ? JSON.parse(localStorage.getItem('agendas')) : [];
}

function getTiposAgenda() {
    return localStorage.getItem('tiposAgenda') ? JSON.parse(localStorage.getItem('tipoAgenda')) : [{ titulo: 'Reunião', cor: '#DAA520' }, { titulo: 'Compromisso', cor: '#BDB76B' }, { titulo: 'Indisponibilidade', cor: '#FF6347' }];
}

function setAgenda(agendas) {
    localStorage.setItem('agendas', JSON.stringify(agendas));
}