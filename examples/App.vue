<template>
  <div id="app">
    <h1>{{ hello('Vincent') }}</h1>
  </div>
</template>

<script>
import { hello } from '@';

export default {
  methods: {
    hello
  }
};
</script>
