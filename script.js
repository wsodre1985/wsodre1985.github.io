document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. Definição das Atividades, Estrutura de Dados e Recompensas
    // Agora, a estrutura inclui os filhos, contador de estrelas e histórico de resgates.
    // ----------------------------------------------------

    let appData = {
        nicolas: {
            goldenStars: 0,
            redeemHistory: [], // Novo: Histórico de resgates para Nicolas
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
            redeemHistory: [], // Novo: Histórico de resgates para Heitor
            activities: {
                segunda: [
                    { id: 'heitor-aprender-seg', title: 'Hora de aprender coisas novas', description: 'Descobrir coisas novas brincando e aprendendo!', icon: '🖍️', completed: false },
                    { id: 'heitor-tempo-livre-seg', title: 'Tempo Livre', description: 'Depois das tarefas, hora de brincar e se divertir!', icon: '☀️', completed: false },
                    { id: 'heitor-toalhas-roupas-seg', title: 'Toalhas e Roupas no Lugar', description: 'Guardar as roupas e toalhas nos lugares certos!', icon: '🧺', completed: false },
                    { id: 'heitor-quarto-organizado-seg', title: 'Quarto Organizado', description: 'Deixar o quarto limpo e arrumado antes de dormir!', icon: '🛏️', completed: false },
                    { id: 'heitor-harmonia-irmaos-seg', title: 'Harmonia entre Irmãos', description: 'Brincar juntos e resolver conflitos com diálogo!', icon: '❤️', completed: false },
                    { id: 'heitor-passear-molly-seg', title: 'Passear com a Molly', description: 'Levar a Molly para um divertido passeio!', icon: '🐕', completed: false },
                    { id: 'heitor-comida-molly-seg', title: 'Dar comida para Molly', description: 'Ajudar a alimentar a Molly com carinho!', icon: '🦴', completed: false },
                    { id: 'heitor-brinquedos-seg', title: 'Organizar os Brinquedos', description: 'Guardar todos os brinquedos no lugar certo!', icon: '🧸', completed: false }
                ],
                terca: [
                    { id: 'heitor-aprender-ter', title: 'Hora de aprender coisas novas', description: 'Descobrir coisas novas brincando e aprendendo!', icon: '🖍️', completed: false },
                    { id: 'heitor-tempo-livre-ter', title: 'Tempo Livre', description: 'Depois das tarefas, hora de brincar e se divertir!', icon: '☀️', completed: false },
                    { id: 'heitor-toalhas-roupas-ter', title: 'Toalhas e Roupas no Lugar', description: 'Guardar as roupas e toalhas nos lugares certos!', icon: '🧺', completed: false },
                    { id: 'heitor-quarto-organizado-ter', title: 'Quarto Organizado', description: 'Deixar o quarto limpo e arrumado antes de dormir!', icon: '🛏️', completed: false },
                    { id: 'heitor-harmonia-irmaos-ter', title: 'Harmonia entre Irmãos', description: 'Brincar juntos e resolver conflitos com diálogo!', icon: '❤️', completed: false },
                    { id: 'heitor-passear-molly-ter', title: 'Passear com a Molly', description: 'Levar a Molly para um divertido passeio!', icon: '🐕', completed: false },
                    { id: 'heitor-comida-molly-ter', title: 'Dar comida para Molly', description: 'Ajudar a alimentar a Molly com carinho!', icon: '🦴', completed: false },
                    { id: 'heitor-brinquedos-ter', title: 'Organizar os Brinquedos', description: 'Guardar todos os brinquedos no lugar certo!', icon: '🧸', completed: false }
                ],
                quarta: [
                    { id: 'heitor-aprender-qua', title: 'Hora de aprender coisas novas', description: 'Descobrir coisas novas brincando e aprendendo!', icon: '🖍️', completed: false },
                    { id: 'heitor-tempo-livre-qua', title: 'Tempo Livre', description: 'Depois das tarefas, hora de brincar e se divertir!', icon: '☀️', completed: false },
                    { id: 'heitor-toalhas-roupas-qua', title: 'Toalhas e Roupas no Lugar', description: 'Guardar as roupas e as toalhas nos lugares certos!', icon: '🧺', completed: false },
                    { id: 'heitor-quarto-organizado-qua', title: 'Quarto Organizado', description: 'Deixar o quarto limpo e arrumado antes de dormir!', icon: '🛏️', completed: false },
                    { id: 'heitor-harmonia-irmaos-qua', title: 'Harmonia entre Irmãos', description: 'Brincar juntos e resolver conflitos com diálogo!', icon: '❤️', completed: false },
                    { id: 'heitor-passear-molly-qua', title: 'Passear com a Molly', description: 'Levar a Molly para um divertido passeio!', icon: '🐕', completed: false },
                    { id: 'heitor-comida-molly-qua', title: 'Dar comida para Molly', description: 'Ajudar a alimentar a Molly com carinho!', icon: '🦴', completed: false },
                    { id: 'heitor-brinquedos-qua', title: 'Organizar os Brinquedos', description: 'Guardar todos os brinquedos no lugar certo!', icon: '🧸', completed: false }
                ],
                quinta: [
                    { id: 'heitor-aprender-qui', title: 'Hora de aprender coisas novas', description: 'Descobrir coisas novas brincando e aprendendo!', icon: '🖍️', completed: false },
                    { id: 'heitor-tempo-livre-qui', title: 'Tempo Livre', description: 'Depois das tarefas, hora de brincar e se divertir!', icon: '☀️', completed: false },
                    { id: 'heitor-toalhas-roupas-qui', title: 'Toalhas e Roupas no Lugar', description: 'Guardar as roupas e as toalhas nos lugares certos!', icon: '🧺', completed: false },
                    { id: 'heitor-quarto-organizado-qui', title: 'Quarto Organizado', description: 'Deixar o quarto limpo e arrumado antes de dormir!', icon: '🛏️', completed: false },
                    { id: 'heitor-harmonia-irmaos-qui', title: 'Harmonia entre Irmãos', description: 'Brincar juntos e resolver conflitos com diálogo!', icon: '❤️', completed: false },
                    { id: 'heitor-passear-molly-qui', title: 'Passear com a Molly', description: 'Levar a Molly para um divertido passeio!', icon: '🐕', completed: false },
                    { id: 'heitor-comida-molly-qui', title: 'Dar comida para Molly', description: 'Ajudar a alimentar a Molly com carinho!', icon: '🦴', completed: false },
                    { id: 'heitor-brinquedos-qui', title: 'Organizar os Brinquedos', description: 'Guardar todos os brinquedos no lugar certo!', icon: '🧸', completed: false }
                ],
                sexta: [
                    { id: 'heitor-aprender-sex', title: 'Hora de aprender coisas novas', description: 'Descobrir coisas novas brincando e aprendendo!', icon: '🖍️', completed: false },
                    { id: 'heitor-tempo-livre-sex', title: 'Tempo Livre', description: 'Depois das tarefas, hora de brincar e se divertir!', icon: '☀️', completed: false },
                    { id: 'heitor-toalhas-roupas-sex', title: 'Toalhas e Roupas no Lugar', description: 'Guardar as roupas e as toalhas nos lugares certos!', icon: '🧺', completed: false },
                    { id: 'heitor-quarto-organizado-sex', title: 'Quarto Organizado', description: 'Deixar o quarto limpo e arrumado antes de dormir!', icon: '🛏️', completed: false },
                    { id: 'heitor-harmonia-irmaos-sex', title: 'Harmonia entre Irmãos', description: 'Brincar juntos e resolver conflitos com diálogo!', icon: '❤️', completed: false },
                    { id: 'heitor-passear-molly-sex', title: 'Passear com a Molly', description: 'Levar a Molly para um divertido passeio!', icon: '🐕', completed: false },
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
    const weekResetButton = document.getElementById('weekResetButton'); // NOVO BOTÃO: Reiniciar Tarefas da Semana

    // Modal de Recompensas (Elementos serão criados no JS, mas definimos referências)
    let rewardModal;
    let rewardModalContent;
    let rewardModalCloseBtn;
    let rewardListElement;
    let redeemHistorySection; // NOVO: Seção do histórico de resgates
    let redeemHistoryList; // NOVO: Lista do histórico de resgates

    let currentChild = 'nicolas'; // Filho inicial
    let currentDay = 'segunda'; // Dia inicial

    // ----------------------------------------------------
    // 3. Funções de Carregamento e Salvação de Dados (localStorage)
    // ----------------------------------------------------

    function loadAppState() {
        const savedState = localStorage.getItem('rewardsAppState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            // Mescla o estado salvo com os dados padrão para novas atividades/filhos/histórico
            for (const childKey in appData) {
                if (parsedState[childKey]) {
                    appData[childKey].goldenStars = parsedState[childKey].goldenStars || 0;
                    appData[childKey].redeemHistory = parsedState[childKey].redeemHistory || []; // Carrega histórico
                    for (const dayKey in appData[childKey].activities) {
                        if (parsedState[childKey].activities[dayKey]) {
                            appData[childKey].activities[dayKey] = appData[childKey].activities[dayKey].map(activity => {
                                const savedActivity = parsedState[childKey].activities[dayKey].find(sa => sa.id === activity.id);
                                // Garante que novas propriedades (como 'completed') sejam mantidas se não existirem
                                return savedActivity ? { ...activity, ...savedActivity } : activity;
                            });
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
        renderRedeemHistory(); // NOVO: Atualiza o histórico ao renderizar atividades
    }

    function renderRedeemHistory() {
        if (!redeemHistoryList) return; // Garante que o elemento existe
        redeemHistoryList.innerHTML = ''; // Limpa o histórico anterior
        const history = appData[currentChild].redeemHistory;

        if (history.length === 0) {
            const li = document.createElement('li');
            li.textContent = 'Nenhum resgate feito ainda.';
            redeemHistoryList.appendChild(li);
            return;
        }

        // Exibe os 5 últimos resgates
        const recentHistory = history.slice(-5); // Pega os 5 últimos itens
        
        recentHistory.reverse().forEach(item => { // Inverte para mostrar o mais recente primeiro
            const li = document.createElement('li');
            li.innerHTML = `
                ${item.name} (${item.cost} ⭐) - 
                <span class="history-date">${new Date(item.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
            `;
            redeemHistoryList.appendChild(li);
        });

        // Adiciona um botão "Ver Tudo" se houver mais de 5 itens (opcional)
        if (history.length > 5) {
            const li = document.createElement('li');
            const seeAllBtn = document.createElement('button');
            seeAllBtn.textContent = 'Ver histórico completo';
            seeAllBtn.classList.add('action-button', 'small-button'); // Adicione classes para estilização
            seeAllBtn.addEventListener('click', () => {
                alert('Funcionalidade de histórico completo a ser implementada! Por enquanto, veja no console.');
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
            renderActivities(); // Rerenderiza para atualizar a UI e progresso/estrelas
        }
    }

    function redeemReward(reward) {
        if (appData[currentChild].goldenStars >= reward.cost) {
            appData[currentChild].goldenStars -= reward.cost;
            appData[currentChild].redeemHistory.push({
                name: reward.name,
                cost: reward.cost,
                date: new Date().toISOString() // Salva a data em formato ISO
            });
            saveAppState();
            updateGoldenStarsDisplay();
            renderRedeemHistory(); // Atualiza o histórico
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
            if (e.target === rewardModal) { // Fecha se clicar fora do conteúdo
                closeRewardModal();
            }
        });

        renderRewardList();
    }

    function renderRewardList() {
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
        rewardModal.style.display = 'flex'; // Exibe o modal
        rewardModal.querySelector('#modalGoldenStars').textContent = appData[currentChild].goldenStars; // Atualiza estrelas no modal
        renderRewardList(); // Re-renderiza a lista para atualizar botões disabled
    }

    function closeRewardModal() {
        if (rewardModal) {
            rewardModal.style.display = 'none'; // Esconde o modal
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

    redeemButton.addEventListener('click', openRewardModal); // Abre o modal ao clicar no botão "Resgatar Recompensas"

    // NOVO: Botão para Reiniciar Tarefas da Semana (apenas o status completed)
    // Precisamos adicionar este botão no HTML ainda!
    // Para testar, você pode comentar esta linha temporariamente ou adicioná-lo no HTML já.
    // Adicionaremos no HTML e CSS a seguir.
    // Por enquanto, vou "simular" que ele existe no HTML para que o JS não dê erro.
    // No entanto, para ele ser funcional, o elemento precisa existir no HTML com o ID 'weekResetButton'.
    // Vou adicioná-lo ao `footer-actions` do HTML.
    // Vamos criar o elemento no final desta resposta para que você possa copiar e colar no HTML.

    function resetWeekTasks() {
        if (confirm('Tem certeza que deseja REINICIAR AS TAREFAS da semana atual para o filho selecionado? O saldo de Estrelas Douradas será MANTIDO.')) {
            for (const dayKey in appData[currentChild].activities) {
                appData[currentChild].activities[dayKey].forEach(activity => {
                    activity.completed = false; // Zera o status de todas as tarefas
                });
            }
            saveAppState();
            renderActivities(); // Re-renderiza para mostrar as tarefas como incompletas
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
    // Certifica-se de que o estado do modal é fechado ao carregar
    closeRewardModal(); 
});