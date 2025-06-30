document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Definição das Atividades, Estrutura de Dados e Recompensas
    // Removida a atividade "Passear com a Molly" para Heitor.
    // ----------------------------------------------------

    let appData = {
        nicolas: {
            goldenStars: 0,
            redeemHistory: [],
            activities: {
                segunda: [
                    { id: 'nicolas-aprender-seg', title: 'Hora de aprender coisas novas', description: 'Estudar e descobrir coisas interessantes!', icon: '📚', completed: false },
                    { id: 'nicolas-tempo-livre-seg', title: 'Tempo Livre', description: 'Depois das tarefas, hora de brincar e se divertir!', icon: '☀️', completed: false },
                    { id: 'nicolas-toalhas-roupas-seg', title: 'Toalhas e Roupas no Lugar', description: 'Guardar as roupas e toalhas nos lugares certos!', icon: '🧺', completed: false },
                    { id: 'nicolas-quarto-organizado-seg', title: 'Quarto Organizado', description: 'Deixar o quarto limpo e arrumado antes de dormir!', icon: '🛏️', completed: false },
                    { id: 'nicolas-harmonia-irmaos-seg', title: 'Harmonia entre Irmãos', description: 'Brincar juntos e resolver conflitos com diálogo!', icon: '❤️', completed: false },
                    { id: 'nicolas-passear-molly-seg', title: 'Passear com a Molly', description: 'Levar a Molly para um divertido passeio!', icon: '🐕', completed: false },
                    { id: 'nicolas-louca-seg', title: 'Organizar a Louça', description: 'Ajudar a guardar a louça limpa nos armários.', icon: '🍽️', completed: false },
                    { id: 'nicolas-brinquedos-seg', title: 'Organizar os Brinquedos', description: 'Guardar todos os brinquedos no lugar certo!', icon: '⚽', completed: false }
                ],
                terca: [
                    { id: 'nicolas-aprender-ter', title: 'Hora de aprender coisas novas', description: 'Estudar e descobrir coisas interessantes!', icon: '📚', completed: false },
                    { id: 'nicolas-tempo-livre-ter', title: 'Tempo Livre', description: 'Depois das tarefas, hora de brincar e se divertir!', icon: '☀️', completed: false },
                    { id: 'nicolas-toalhas-roupas-ter', title: 'Toalhas e Roupas no Lugar', description: 'Guardar as roupas e toalhas nos lugares certos!', icon: '🧺', completed: false },
                    { id: 'nicolas-quarto-organizado-ter', title: 'Quarto Organizado', description: 'Deixar o quarto limpo e arrumado antes de dormir!', icon: '🛏️', completed: false },
                    { id: 'nicolas-harmonia-irmaos-ter', title: 'Harmonia entre Irmãos', description: 'Brincar juntos e resolver conflitos com diálogo!', icon: '❤️', completed: false },
                    { id: 'nicolas-passear-molly-ter', title: 'Passear com a Molly', description: 'Levar a Molly para um divertido passeio!', icon: '🐕', completed: false },
                    { id: 'nicolas-louca-ter', title: 'Organizar a Louça', description: 'Ajudar a guardar a louça limpa nos armários.', icon: '🍽️', completed: false },
                    { id: 'nicolas-brinquedos-ter', title: 'Organizar os Brinquedos', description: 'Guardar todos os brinquedos no lugar certo!', icon: '⚽', completed: false }
                ],
                quarta: [
                    { id: 'nicolas-aprender-qua', title: 'Hora de aprender coisas novas', description: 'Estudar e descobrir coisas interessantes!', icon: '📚', completed: false },
                    { id: 'nicolas-tempo-livre-qua', title: 'Tempo Livre', description: 'Depois das tarefas, hora de brincar e se divertir!', icon: '☀️', completed: false },
                    { id: 'nicolas-toalhas-roupas-qua', title: 'Toalhas e Roupas no Lugar', description: 'Guardar as roupas e as toalhas nos lugares certos!', icon: '🧺', completed: false },
                    { id: 'nicolas-quarto-organizado-qua', title: 'Quarto Organizado', description: 'Deixar o quarto limpo e arrumado antes de dormir!', icon: '🛏️', completed: false },
                    { id: 'nicolas-harmonia-irmaos-qua', title: 'Harmonia entre Irmãos', description: 'Brincar juntos e resolver conflitos com diálogo!', icon: '❤️', completed: false },
                    { id: 'nicolas-passear-molly-qua', title: 'Passear com a Molly', description: 'Levar a Molly para um divertido passeio!', icon: '🐕', completed: false },
                    { id: 'nicolas-louca-qua', title: 'Organizar a Louça', description: 'Ajudar a guardar a louça limpa nos armários.', icon: '🍽️', completed: false },
                    { id: 'nicolas-brinquedos-qua', title: 'Organizar os Brinquedos', description: 'Guardar todos os brinquedos no lugar certo!', icon: '⚽', completed: false }
                ],
                quinta: [
                    { id: 'nicolas-aprender-qui', title: 'Hora de aprender coisas novas', description: 'Estudar e descobrir coisas interessantes!', icon: '📚', completed: false },
                    { id: 'nicolas-tempo-livre-qui', title: 'Tempo Livre', description: 'Depois das tarefas, hora de brincar e se divertir!', icon: '☀️', completed: false },
                    { id: 'nicolas-toalhas-roupas-qui', title: 'Toalhas e Roupas no Lugar', description: 'Guardar as roupas e as toalhas nos lugares certos!', icon: '🧺', completed: false },
                    { id: 'nicolas-quarto-organizado-qui', title: 'Quarto Organizado', description: 'Deixar o quarto limpo e arrumado antes de dormir!', icon: '🛏️', completed: false },
                    { id: 'nicolas-harmonia-irmaos-qui', title: 'Harmonia entre Irmãos', description: 'Brincar juntos e resolver conflitos com diálogo!', icon: '❤️', completed: false },
                    { id: 'nicolas-passear-molly-qui', title: 'Passear com a Molly', description: 'Levar a Molly para um divertido passeio!', icon: '🐕', completed: false },
                    { id: 'nicolas-louca-qui', title: 'Organizar a Louça', description: 'Ajudar a guardar a louça limpa nos armários.', icon: '🍽️', completed: false },
                    { id: 'nicolas-brinquedos-qui', title: 'Organizar os Brinquedos', description: 'Guardar todos os brinquedos no lugar certo!', icon: '⚽', completed: false }
                ],
                sexta: [
                    { id: 'nicolas-aprender-sex', title: 'Hora de aprender coisas novas', description: 'Estudar e descobrir coisas interessantes!', icon: '📚', completed: false },
                    { id: 'nicolas-tempo-livre-sex', title: 'Tempo Livre', description: 'Depois das tarefas, hora de brincar e se divertir!', icon: '☀️', completed: false },
                    { id: 'nicolas-toalhas-roupas-sex', title: 'Toalhas e Roupas no Lugar', description: 'Guardar as roupas e as toalhas nos lugares certos!', icon: '🧺', completed: false },
                    { id: 'nicolas-quarto-organizado-sex', title: 'Quarto Organizado', description: 'Deixar o quarto limpo e arrumado antes de dormir!', icon: '🛏️', completed: false },
                    { id: 'nicolas-harmonia-irmaos-sex', title: 'Harmonia entre Irmãos', description: 'Brincar juntos e resolver conflitos com diálogo!', icon: '❤️', completed: false },
                    { id: 'nicolas-passear-molly-sex', title: 'Passear com a Molly', description: 'Levar a Molly para um divertido passeio!', icon: '🐕', completed: false },
                    { id: 'nicolas-louca-sex', title: 'Organizar a Louça', description: 'Ajudar a guardar a louça limpa nos armários.', icon: '🍽️', completed: false },
                    { id: 'nicolas-brinquedos-sex', title: 'Organizar os Brinquedos', description: 'Guardar todos os brinquedos no lugar certo!', icon: '⚽', completed: false }
                ]
            }
        },
        heitor: {
            goldenStars: 0,
            redeemHistory: [],
            activities: {
                segunda: [
                    { id: 'heitor-aprender-seg', title: 'Hora de aprender coisas novas', description: 'Descobrir coisas novas brincando e aprendendo!', icon: '🖍️', completed: false },
                    { id: 'heitor-tempo-livre-seg', title: 'Tempo Livre', description: 'Depois das tarefas, hora de brincar e se divertir!', icon: '☀️', completed: false },
                    { id: 'heitor-toalhas-roupas-seg', title: 'Toalhas e Roupas no Lugar', description: 'Guardar as roupas e toalhas nos lugares certos!', icon: '🧺', completed: false },
                    { id: 'heitor-quarto-organizado-seg', title: 'Quarto Organizado', description: 'Deixar o quarto limpo e arrumado antes de dormir!', icon: '🛏️', completed: false },
                    { id: 'heitor-harmonia-irmaos-seg', title: 'Harmonia entre Irmãos', description: 'Brincar juntos e resolver conflitos com diálogo!', icon: '❤️', completed: false },
                    // REMOVIDA: { id: 'heitor-passear-molly-seg', title: 'Passear com a Molly', description: 'Levar a Molly para um divertido passeio!', icon: '🐕', completed: false },
                    { id: 'heitor-comida-molly-seg', title: 'Dar comida para Molly', description: 'Ajudar a alimentar a Molly com carinho!', icon: '🦴', completed: false },
                    { id: 'heitor-brinquedos-seg', title: 'Organizar os Brinquedos', description: 'Guardar todos os brinquedos no lugar certo!', icon: '🧸', completed: false }
                ],
                terca: [
                    { id: 'heitor-aprender-ter', title: 'Hora de aprender coisas novas', description: 'Descobrir coisas novas brincando e aprendendo!', icon: '🖍️', completed: false },
                    { id: 'heitor-tempo-livre-ter', title: 'Tempo Livre', description: 'Depois das tarefas, hora de brincar e se divertir!', icon: '☀️', completed: false },
                    { id: 'heitor-toalhas-roupas-ter', title: 'Toalhas e Roupas no Lugar', description: 'Guardar as roupas e toalhas nos lugares certos!', icon: '🧺', completed: false },
                    { id: 'heitor-quarto-organizado-ter', title: 'Quarto Organizado', description: 'Deixar o quarto limpo e arrumado antes de dormir!', icon: '🛏️', completed: false },
                    { id: 'heitor-harmonia-irmaos-ter', title: 'Harmonia entre Irmãos', description: 'Brincar juntos e resolver conflitos com diálogo!', icon: '❤️', completed: false },
                    // REMOVIDA: { id: 'heitor-passear-molly-ter', title: 'Passear com a Molly', description: 'Levar a Molly para um divertido passeio!', icon: '🐕', completed: false },
                    { id: 'heitor-comida-molly-ter', title: 'Dar comida para Molly', description: 'Ajudar a alimentar a Molly com carinho!', icon: '🦴', completed: false },
                    { id: 'heitor-brinquedos-ter', title: 'Organizar os Brinquedos', description: 'Guardar todos os brinquedos no lugar certo!', icon: '🧸', completed: false }
                ],
                quarta: [
                    { id: 'heitor-aprender-qua', title: 'Hora de aprender coisas novas', description: 'Descobrir coisas novas brincando e aprendendo!', icon: '🖍️', completed: false },
                    { id: 'heitor-tempo-livre-qua', title: 'Tempo Livre', description: 'Depois das tarefas, hora de brincar e se divertir!', icon: '☀️', completed: false },
                    { id: 'heitor-toalhas-roupas-qua', title: 'Toalhas e Roupas no Lugar', description: 'Guardar as roupas e as toalhas nos lugares certos!', icon: '🧺', completed: false },
                    { id: 'heitor-quarto-organizado-qua', title: 'Quarto Organizado', description: 'Deixar o quarto limpo e arrumado antes de dormir!', icon: '🛏️', completed: false },
                    { id: 'heitor-harmonia-irmaos-qua', title: 'Harmonia entre Irmãos', description: 'Brincar juntos e resolver conflitos com diálogo!', icon: '❤️', completed: false },
                    // REMOVIDA: { id: 'heitor-passear-molly-qua', title: 'Passear com a Molly', description: 'Levar a Molly para um divertido passeio!', icon: '🐕', completed: false },
                    { id: 'heitor-comida-molly-qua', title: 'Dar comida para Molly', description: 'Ajudar a alimentar a Molly com carinho!', icon: '🦴', completed: false },
                    { id: 'heitor-brinquedos-qua', title: 'Organizar os Brinquedos', description: 'Guardar todos os brinquedos no lugar certo!', icon: '🧸', completed: false }
                ],
                quinta: [
                    { id: 'heitor-aprender-qui', title: 'Hora de aprender coisas novas', description: 'Descobrir coisas novas brincando e aprendendo!', icon: '🖍️', completed: false },
                    { id: 'heitor-tempo-livre-qui', title: 'Tempo Livre', description: 'Depois das tarefas, hora de brincar e se divertir!', icon: '☀️', completed: false },
                    { id: 'heitor-toalhas-roupas-qui', title: 'Toalhas e Roupas no Lugar', description: 'Guardar as roupas e as toalhas nos lugares certos!', icon: '🧺', completed: false },
                    { id: 'heitor-quarto-organizado-qui', title: 'Quarto Organizado', description: 'Deixar o quarto limpo e arrumado antes de dormir!', icon: '🛏️', completed: false },
                    { id: 'heitor-harmonia-irmaos-qui', title: 'Harmonia entre Irmãos', description: 'Brincar juntos e resolver conflitos com diálogo!', icon: '❤️', completed: false },
                    // REMOVIDA: { id: 'heitor-passear-molly-qui', title: 'Passear com a Molly', description: 'Levar a Molly para um divertido passeio!', icon: '🐕', completed: false },
                    { id: 'heitor-comida-molly-qui', title: 'Dar comida para Molly', description: 'Ajudar a alimentar a Molly com carinho!', icon: '🦴', completed: false },
                    { id: 'heitor-brinquedos-qui', title: 'Organizar os Brinquedos', description: 'Guardar todos os brinquedos no lugar certo!', icon: '🧸', completed: false }
                ],
                sexta: [
                    { id: 'heitor-aprender-sex', title: 'Hora de aprender coisas novas', description: 'Descobrir coisas novas brincando e aprendendo!', icon: '🖍️', completed: false },
                    { id: 'heitor-tempo-livre-sex', title: 'Tempo Livre', description: 'Depois das tarefas, hora de brincar e se divertir!', icon: '☀️', completed: false },
                    { id: 'heitor-toalhas-roupas-sex', title: 'Toalhas e Roupas no Lugar', description: 'Guardar as roupas e as toalhas nos lugares certos!', icon: '🧺', completed: false },
                    { id: 'heitor-quarto-organizado-sex', title: 'Quarto Organizado', description: 'Deixar o quarto limpo e arrumado antes de dormir!', icon: '🛏️', completed: false },
                    { id: 'heitor-harmonia-irmaos-sex', title: 'Harmonia entre Irmãos', description: 'Brincar juntos e resolver conflitos com diálogo!', icon: '❤️', completed: false },
                    // REMOVIDA: { id: 'heitor-passear-molly-sex', title: 'Passear com a Molly', description: 'Levar a Molly para um divertido passeio!', icon: '🐕', completed: false },
                    { id: 'heitor-comida-molly-sex', title: 'Dar comida para Molly', description: 'Ajudar a alimentar a Molly com carinho!', icon: '🦴', completed: false },
                    { id: 'heitor-brinquedos-sex', title: 'Organizar os Brinquedos', description: 'Guardar todos os brinquedos no lugar certo!', icon: '🧸', completed: false }
                ]
            }
        }
    };

    // Definição das Recompensas Disponíveis
    const rewards = [
        { name: '1 Picolé', cost: 15, icon: '🍦' },
        { name: '1 Sorvete Grande', cost: 20, icon: '🍨' },
        { name: '10 minutos de Celular/Tablet', cost: 15, icon: '📱' },
        { name: 'Escolher o Filme da Noite', cost: 10, icon: '🎬' },
        { name: 'Comida Favorita no Jantar', cost: 25, icon: '🍝' },
        { name: 'Comprar um gibi/revista', cost: 30, icon: '📖' },
        { name: 'Passeio no Parque/Praia', cost: 40, icon: '🌳' }
    ];

    // ----------------------------------------------------
    // 2. Seleção de Elementos do DOM
    // ----------------------------------------------------

    const body = document.body;
    const childTabs = document.querySelectorAll('.child-tab-button');
    const dayTabs = document.querySelectorAll('.tab-button');
    const currentDayTitle = document.getElementById('currentDayTitle');
    const activitiesGrid = document.getElementById('activitiesGrid');
    const progressBar = document.getElementById('progressBar');
    const completedTasksSpan = document.getElementById('completedTasks');
    const totalTasksSpan = document.getElementById('totalTasks');
    const goldenStarsSpan = document.getElementById('goldenStars');
    const exportButton = document.querySelector('.export-button');
    const importButton = document.querySelector('.import-button');
    const resetButton = document.querySelector('.reset-button');
    const redeemButton = document.querySelector('.redeem-button');
    const weekResetButton = document.getElementById('weekResetButton');

    // Modal de Recompensas
    let rewardModal;
    let rewardModalContent;
    let rewardModalCloseBtn;
    let rewardListElement;

    // Seleção dos elementos do Histórico de Resgates
    const redeemHistorySection = document.querySelector('.history-card'); 
    const redeemHistoryList = document.getElementById('redeemHistoryList'); 

    let currentChild = 'nicolas'; // Filho inicial
    let currentDay = 'segunda'; // Dia inicial

    // ----------------------------------------------------
    // 3. Funções de Carregamento e Salvação de Dados (localStorage)
    // ----------------------------------------------------

    function loadAppState() {
        const savedState = localStorage.getItem('rewardsAppState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            for (const childKey in appData) {
                if (parsedState[childKey]) {
                    appData[childKey].goldenStars = parsedState[childKey].goldenStars || 0;
                    appData[childKey].redeemHistory = parsedState[childKey].redeemHistory || []; 
                    for (const dayKey in appData[childKey].activities) {
                        if (parsedState[childKey].activities[dayKey]) {
                            // Filtra atividades que não existem mais nos dados padrão (como "Passear com a Molly" para Heitor)
                            appData[childKey].activities[dayKey] = appData[childKey].activities[dayKey].map(activity => {
                                const savedActivity = parsedState[childKey].activities[dayKey].find(sa => sa.id === activity.id);
                                return savedActivity ? { ...activity, ...savedActivity } : activity;
                            }).filter(activity => 
                                // Garante que a atividade ainda existe na definição padrão para este filho/dia
                                appData[childKey].activities[dayKey].some(a => a.id === activity.id)
                            );
                        }
                    }
                }
            }
        }
    }

    function saveAppState() {
        localStorage.setItem('rewardsAppState', JSON.stringify(appData));
    }

    // ----------------------------------------------------
    // 4. Renderização das Atividades e Display de Histórico
    // ----------------------------------------------------

    function createActivityCard(activity) {
        const card = document.createElement('div');
        card.classList.add('activity-card');
        if (activity.completed) {
            card.classList.add('completed');
        }
        card.dataset.id = activity.id;

        card.innerHTML = `
            <button class="star-button">${activity.completed ? '⭐' : '☆'}</button>
            <div class="activity-icon">${activity.icon}</div>
            <h3>${activity.title}</h3>
            <p>${activity.description}</p>
        `;

        const starButton = card.querySelector('.star-button');
        starButton.addEventListener('click', () => toggleActivityCompletion(activity.id));

        return card;
    }

    function renderActivities() {
        activitiesGrid.innerHTML = '';
        const activities = appData[currentChild].activities[currentDay];
        if (activities) {
            activities.forEach(activity => {
                activitiesGrid.appendChild(createActivityCard(activity));
            });
        }
        updateProgressBar();
        updateGoldenStarsDisplay();
        renderRedeemHistory();
    }

    function renderRedeemHistory() {
        if (!redeemHistoryList) {
            console.error("Elemento 'redeemHistoryList' não encontrado no DOM.");
            return; 
        } 
        redeemHistoryList.innerHTML = '';
        const history = appData[currentChild].redeemHistory;

        if (history.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'Nenhum resgate feito ainda.';
            redeemHistoryList.appendChild(li);
            return;
        }

        const recentHistory = history.slice(-5);
        
        recentHistory.reverse().forEach(item => {
            const li = document.createElement('li');
            const date = new Date(item.date);
            const formattedDate = `${date.toLocaleDateString('pt-BR')} ${date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;

            li.innerHTML = `
                ${item.name} (${item.cost} ⭐) - 
                <span class="history-date">${formattedDate}</span>
            `;
            redeemHistoryList.appendChild(li);
        });

        if (history.length > 5) {
            const li = document.createElement('li');
            const seeAllBtn = document.createElement('button');
            seeAllBtn.textContent = 'Ver histórico completo';
            seeAllBtn.classList.add('action-button', 'small-button');
            seeAllBtn.style.marginTop = '10px';
            seeAllBtn.addEventListener('click', () => {
                let fullHistoryText = `Histórico de Resgates de ${currentChild.charAt(0).toUpperCase() + currentChild.slice(1)}:\n\n`;
                history.forEach(item => {
                    const date = new Date(item.date);
                    const formattedDate = `${date.toLocaleDateString('pt-BR')} ${date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
                    fullHistoryText += `${item.name} (${item.cost} ⭐) - ${formattedDate}\n`;
                });
                alert(fullHistoryText);
                console.log('Histórico Completo:', appData[currentChild].redeemHistory);
            });
            li.appendChild(seeAllBtn);
            redeemHistoryList.appendChild(li);
        }
    }


    // ----------------------------------------------------
    // 5. Lógica de Conclusão de Atividades e Recompensas
    // ----------------------------------------------------

    function toggleActivityCompletion(activityId) {
        let found = false;
        appData[currentChild].activities[currentDay] = appData[currentChild].activities[currentDay].map(activity => {
            if (activity.id === activityId) {
                const wasCompleted = activity.completed;
                const newCompletedStatus = !wasCompleted;
                
                if (newCompletedStatus && !wasCompleted) {
                    appData[currentChild].goldenStars++;
                } else if (!newCompletedStatus && wasCompleted) {
                    appData[currentChild].goldenStars = Math.max(0, appData[currentChild].goldenStars - 1);
                }

                found = true;
                return { ...activity, completed: newCompletedStatus };
            }
            return activity;
        });

        if (found) {
            saveAppState();
            renderActivities();
        }
    }

    function redeemReward(reward) {
        if (appData[currentChild].goldenStars >= reward.cost) {
            appData[currentChild].goldenStars -= reward.cost;
            appData[currentChild].redeemHistory.push({
                name: reward.name,
                cost: reward.cost,
                date: new Date().toISOString()
            });
            saveAppState();
            updateGoldenStarsDisplay();
            renderRedeemHistory();
            alert(`Parabéns, ${currentChild.charAt(0).toUpperCase() + currentChild.slice(1)}! Você resgatou "${reward.name}" por ${reward.cost} Estrelas Douradas!`);
            closeRewardModal();
        } else {
            alert(`Você precisa de mais Estrelas Douradas para "${reward.name}". Faltam ${reward.cost - appData[currentChild].goldenStars} estrelas!`);
        }
    }

    // ----------------------------------------------------
    // 6. Atualização da Barra de Progresso e Estrelas Douradas
    // ----------------------------------------------------

    function updateProgressBar() {
        const activities = appData[currentChild].activities[currentDay];
        if (!activities || activities.length === 0) {
            completedTasksSpan.textContent = 0;
            totalTasksSpan.textContent = 0;
            progressBar.style.width = '0%';
            return;
        }

        const totalTasks = activities.length;
        const completedTasks = activities.filter(activity => activity.completed).length;
        const progressPercentage = (completedTasks / totalTasks) * 100;

        completedTasksSpan.textContent = completedTasks;
        totalTasksSpan.textContent = totalTasks;
        progressBar.style.width = `${progressPercentage}%`;
    }

    function updateGoldenStarsDisplay() {
        goldenStarsSpan.textContent = appData[currentChild].goldenStars;
        if (rewardModal && rewardModal.style.display === 'flex') {
            rewardModal.querySelector('#modalGoldenStars').textContent = appData[currentChild].goldenStars;
            renderRewardList();
        }
    }

    // ----------------------------------------------------
    // 7. Navegação entre os Dias e Filhos
    // ----------------------------------------------------

    childTabs.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.child-tab-button.active').classList.remove('active');
            button.classList.add('active');
            currentChild = button.dataset.child;
            
            body.classList.remove('theme-nicolas', 'theme-heitor');
            body.classList.add(`theme-${currentChild}`);

            renderActivities();
            updateDayTabState();
        });
    });

    dayTabs.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.tab-button.active').classList.remove('active');
            button.classList.add('active');
            currentDay = button.dataset.day;
            currentDayTitle.textContent = button.textContent + '-feira';
            renderActivities();
        });
    });

    function updateDayTabState() {
        dayTabs.forEach(button => {
            if (button.dataset.day === currentDay) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        currentDayTitle.textContent = dayTabs[Array.from(dayTabs).findIndex(btn => btn.dataset.day === currentDay)].textContent + '-feira';
    }

    // ----------------------------------------------------
    // 8. Modal de Recompensas
    // ----------------------------------------------------

    function createRewardModal() {
        rewardModal = document.createElement('div');
        rewardModal.classList.add('reward-modal');
        rewardModal.innerHTML = `
            <div class="reward-modal-content">
                <span class="close-button">&times;</span>
                <h2>Resgatar Recompensas</h2>
                <p>Estrelas Douradas de ${currentChild.charAt(0).toUpperCase() + currentChild.slice(1)}: <span id="modalGoldenStars">${appData[currentChild].goldenStars}</span> ⭐</p>
                <ul id="rewardList">
                    </ul>
            </div>
        `;
        document.body.appendChild(rewardModal);

        rewardModalContent = rewardModal.querySelector('.reward-modal-content');
        rewardModalCloseBtn = rewardModal.querySelector('.close-button');
        rewardListElement = rewardModal.querySelector('#rewardList');

        rewardModalCloseBtn.addEventListener('click', closeRewardModal);
        rewardModal.addEventListener('click', (e) => {
            if (e.target === rewardModal) {
                closeRewardModal();
            }
        });

        renderRewardList();
    }

    function renderRewardList() {
        if (!rewardListElement) return;
        rewardListElement.innerHTML = '';
        rewards.forEach(reward => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${reward.icon} ${reward.name} - <span>${reward.cost} ⭐</span>
                <button class="redeem-item-button" data-reward-name="${reward.name}" ${appData[currentChild].goldenStars < reward.cost ? 'disabled' : ''}>Resgatar</button>
            `;
            const redeemItemButton = li.querySelector('.redeem-item-button');
            redeemItemButton.addEventListener('click', () => redeemReward(reward));
            rewardListElement.appendChild(li);
        });
    }

    function openRewardModal() {
        if (!rewardModal) {
            createRewardModal();
        }
        rewardModal.style.display = 'flex';
        updateGoldenStarsDisplay();
    }

    function closeRewardModal() {
        if (rewardModal) {
            rewardModal.style.display = 'none';
        }
    }

    // ----------------------------------------------------
    // 9. Funções dos Botões de Ação (Exportar, Importar, Reiniciar, Reiniciar Tarefas da Semana)
    // ----------------------------------------------------

    exportButton.addEventListener('click', () => {
        const dataStr = JSON.stringify(appData, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'quadro_recompensas_data.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        alert('Dados exportados com sucesso!');
    });

    importButton.addEventListener('click', () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json';
        input.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        const importedData = JSON.parse(event.target.result);
                        if (typeof importedData === 'object' && importedData.nicolas && importedData.heitor) {
                            appData = importedData;
                            saveAppState();
                            renderActivities();
                            updateGoldenStarsDisplay();
                            alert('Dados importados com sucesso!');
                        } else {
                            alert('Formato de arquivo JSON inválido para importação. Certifique-se de que contém dados para Nicolas e Heitor.');
                        }
                    } catch (error) {
                        alert('Erro ao ler o arquivo JSON: ' + error.message);
                        console.error('Erro ao ler JSON:', error);
                    }
                };
                reader.readAsText(file);
            }
        };
        input.click();
    });

    resetButton.addEventListener('click', () => {
        if (confirm('Tem certeza que deseja REINICIAR TODO o progresso de TODOS os filhos, incluindo Estrelas Douradas e histórico? Esta ação não pode ser desfeita.')) {
            localStorage.removeItem('rewardsAppState');
            location.reload();
        }
    });

    redeemButton.addEventListener('click', openRewardModal);

    if (weekResetButton) {
        weekResetButton.addEventListener('click', resetWeekTasks);
    } else {
        console.warn("Elemento com ID 'weekResetButton' não encontrado no DOM. O botão de reiniciar tarefas semanais não funcionará.");
    }

    function resetWeekTasks() {
        if (confirm('Tem certeza que deseja REINICIAR AS TAREFAS da semana atual para o filho selecionado? O saldo de Estrelas Douradas será MANTIDO.')) {
            for (const dayKey in appData[currentChild].activities) {
                appData[currentChild].activities[dayKey].forEach(activity => {
                    activity.completed = false; // Zera o status de todas as tarefas
                });
            }
            saveAppState();
            renderActivities();
            alert(`Tarefas da semana de ${currentChild.charAt(0).toUpperCase() + currentChild.slice(1)} foram reiniciadas!`);
        }
    }

    // ----------------------------------------------------
    // 10. Inicialização
    // ----------------------------------------------------

    loadAppState();
    body.classList.add(`theme-${currentChild}`); 
    renderActivities(); 
    updateDayTabState(); 
    closeRewardModal(); 
});