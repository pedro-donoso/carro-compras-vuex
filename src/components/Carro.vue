<template>
  <v-container>
    <h2>Carro de la compra</h2>
    <h3>Total compra: {{ totalCompra.toFixed(2) }} $</h3>
    <ul>
      <li v-for="(producto, indice) in carro" :key="indice">
        {{ producto.nombre }}
        <v-btn x-small color="secondary" dark @click="eliminarProducto(indice)">X</v-btn>
      </li>
    </ul>
  </v-container>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["carro"]),
    ...mapGetters(["totalCompra"]),
  },

  methods: mapMutations(["eliminarProducto"]),
};
</script>