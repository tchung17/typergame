import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        difficulty: 'easy',
        time: 90,
        score: 0,
        gameOver: false,
        win: false,
        lose: false,
    },
    getters: {
        getDifficulty: state => {
            return state.difficulty;
        },
        getTime: state => {
            return state.time;
        },
        getScore: state => {
            return state.score;
        },
        getWin: state => {
            return state.win;
        },
        getLose: state => {
            return state.lose;
        }
    },
    mutations: {
        incrementTime: state => {
            if (state.difficulty == "easy") {
                if (state.time >= 95) {
                    state.time = 100;
                    state.win = true;
                } else {
                    state.time += 5;
                }
            }
            else if (state.difficulty == "medium") {
                if (state.time >= 97) {
                    state.time = 100;
                    state.win = true;
                } else {
                    state.time += 3;
                }
            }
            else if (state.difficulty == "hard") {
                if (state.time >= 98) {
                    state.time = 100;
                    state.win = true;
                } else {
                    state.time += 2;
                }
            }
        },
        incrementScore: state => {
            state.score += 1;
        },
        changeDifficulty: (state, payload) => {
            state.difficulty = payload;
        },
        setTime: (state, payload) => {
            state.time = payload;
        },
        restartGame: state => {
            if (state.gameOver) {
                state.time = 10;
                state.gameOver = false;
                state.win = false;
                state.lose =false;
                state.score = 0;
            }
        },
        timerTick: state => {
            state.time -= 1;
            if (state.time <= 0) {
                console.log('game ended');
                state.gameOver = true;
                state.time = 0;
                state.lose = true;
            }
        }
    },
    actions: {
        incrementTime: ({ commit }, payload) => {
            commit('incrementTime', payload);
        },
        restartGame: ({ commit }) => {
            commit('restartGame');
        },
        setTime: ({ commit }, payload) => {
            commit('setTime', payload);
        },
        changeDifficulty: ({ commit }, payload) => {
            commit('changeDifficulty', payload);
        },
        timerTick: ({ commit }) => {
            commit('timerTick');
        },
        incrementScore: ({ commit }) => {
            commit('incrementScore');
        }
    }

});