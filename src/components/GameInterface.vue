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
                  @input="restartGame(), checkMatch()"
                  clearable>
                </el-input>
              </el-col>
            </el-row>
        </div>
      <p class="score-container">Score: <span id="score">{{ getScore }}</span></p>
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'Game',
  data () {
    return {
      inputword: "",
      score: 0,
      words: [""],
    }
  },
  methods: {
    ...mapActions([
      'incrementTime',
      'restartGame',
      'setTime',
      'timerTick',
      'incrementScore'
    ]),
    startTimer() {
      const interval = setInterval(
        this.timerTick
      , 1000);
    },
    checkMatch() {
      if (this.inputword == this.words[0]) {
        this.inputword = "";
        this.incrementTime();
        this.incrementScore();
        this.changeWord();
      }
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
  computed: {
    ...mapGetters([
      'getScore'
    ])
  },
  created: function() {
    axios.get("https://random-word-api.herokuapp.com/word?number=2")
      .then(res => {
        let wordstemp = [];
        wordstemp.push(res.data[0]);
        wordstemp.push(res.data[1]);
        this.words = wordstemp;
    });
    this.startTimer();
    console.log(this.game);
  }
}
</script>
<style>
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