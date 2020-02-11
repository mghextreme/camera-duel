<template>
  <div class="duel">
    <div class="images">
      <div class="image-container a">
        <div class="image">
          <img src="img/pics/night-mode/a.jpg" />
        </div>
      </div>
      <div class="image-container b">
        <div class="image">
          <img src="img/pics/night-mode/b.jpg" />
        </div>
      </div>
    </div>
    <div class="description">
      <h3 class="category spacer-40">Night Mode</h3>
      <div class="spacer-20"><a class="button skip" href="#">Skip</a></div>
      <div class="spacer-40"><router-link to="/home" class="button home">Home</router-link></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Duel extends Vue {}
</script>

<style lang="scss" scoped>
.duel {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  color: #ddd;
  background: #111;

  .images {
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    align-content: stretch;
    justify-content: space-between;
    width: 100%;
    height: calc(100% - 5em);

    .image-container {
      flex: 0 0 auto;
      width: 50%;
      height: 100%;
      padding: 1em;

      .a { padding-right: 0.5em; }
      .b { padding-left: 0.5em; }

      .image {
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        width: 100%;
        height: 100%;
        border: 0px solid rgba(68, 68, 68, 0);
        cursor: pointer;
        transition: border-width 400ms ease-out;

        img {
          min-width: 100%;
          min-height: 100%;
          object-fit: cover;
          transition: all 400ms ease-out;
        }

        &:hover {
          border-width: 2em;

          img {
            transform: scale(1.15);
          }
        }
      }
    }
  }

  .description {
    flex: 0 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    padding: 0.5em 1.5em 1.5em 1.5em;

    .spacer-40 {
      flex: 1 1 auto;
      width: 40%;

      &:first-child { text-align: left; }
      &:last-child { text-align: right; }
    }

    .spacer-20 {
      flex: 1 1 auto;
      width: 20%;
    }

    .category {
      font-size: 3em;
      line-height: 1em;
    }

    .button {
      display: inline-block;
      padding: .5em 1em;
      margin: 0 .5em;
      font-size: 1.2em;
      font-weight: bold;
      text-transform: uppercase;
      background: #222;
      transition: transform 200ms ease-out, background 200ms linear;

      &:hover,
      &:focus {
        transform: scale(1.1);
        background: rgba(34, 34, 34, 0.7);
      }
    }
  }
}
</style>
