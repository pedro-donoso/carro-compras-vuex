<template>
  <section>
    <productos />
    <carro />
  </section>
</template>

<script>
import Productos from "./components/Productos.vue";
import Carro from "./components/Carro";

export default {
  components: { Productos, Carro },
};
</script>

<style lang="scss">
  html{
    background: greenyellow;
  }
</style>
