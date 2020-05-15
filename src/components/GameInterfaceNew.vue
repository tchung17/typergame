<template>
    <div class="container">
      <div> {{ words[0] }}</div>
        <div class="inputbox">
          <el-row>
              <el-col :span="8" :offset="8">
                <el-input class="underlay"
                  :placeholder="[[ words[0] ]]"
                  autocomplete="off"
                  clearable>
                </el-input>
                <el-input class="overlay"
                  autocomplete="off"
                  v-model="inputword"
                  @input=" checkMatch()"
                  clearable>
                </el-input>
              </el-col>
            </el-row>
        </div>
      <p class="score-container">Score: <span id="score">{{ this.game.score }}</span></p>
      <div class="difficulty-container">{{ this.game.difficulty }}</div>
      <div class="time-container">{{ this.game.time }}</div>
      <br>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'GameInterface',
    data() {
        return {
            inputword: "",
            words: [""],
        }
    },
    props: [ 'game' ],
    methods: {
        checkMatch() {
            if (this.inputword == this.words[0]) {
                this.inputword = "";
                this.incrementTime();
                this.incrementScore();
                this.changeWord();
            }
        },
        incrementTime() {
            if (this.game.difficulty == "easy") {
                if (this.game.time >= 95) {
                    this.game.time = 100;
                } else {
                    this.game.time += 5;
                }
            }
            else if (this.game.difficulty == "medium") {
                if (this.game.time >= 97) {
                    this.game.time = 100;
                } else {
                    this.game.time += 3;
                }
            }
            else if (this.game.difficulty == "hard") {
                if (this.game.time >= 98) {
                    this.game.time = 100;
                } else {
                    this.game.time += 2;
                }
            }
        },
        incrementScore() {
            this.game.score += 1;
        },
        changeWord() {
            this.words[0] = this.words[1];
            axios.get("https://random-word-api.herokuapp.com/word?number=1")
            .then(res => {
                this.words[1] = res.data[0]
            })
            .catch(error => console.log(error));
        },
    },
    created () {
        axios.get("https://random-word-api.herokuapp.com/word?number=2")
        .then(res => {
            let wordstemp = [];
            wordstemp.push(res.data[0]);
            wordstemp.push(res.data[1]);
            this.words = wordstemp;
        });
    },
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
.overlay{
  opacity: 0.5;
  position: relative;
  top: -40px;
  z-index: 1;
}
</style>