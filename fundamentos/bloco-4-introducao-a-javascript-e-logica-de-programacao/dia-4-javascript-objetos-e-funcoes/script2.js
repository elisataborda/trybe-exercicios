for (let key in info, info2) {
    if (info[key] === 'Sim' && info2[key] === 'Sim' && key === 'recorrente') {
        console.log('Ambos recorrentes');
    }

    console.log(info[key] + ' e ' + info2[key]);
}