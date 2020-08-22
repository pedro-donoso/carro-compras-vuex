<template>
  <section>
    <productos></productos>
    <carro></carro>
  </section>
</template>

<script>
import Productos from "./components/Productos.vue";
import Carro from "./components/Carro";

export default {
  components: { Productos, Carro },
};
</script>
