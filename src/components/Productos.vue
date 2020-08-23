<template>
  <v-container>
    <h1>CARRO DE COMPRAS</h1>
    <hr>
    <form @submit.prevent="anadir">
      <h3>Ingresa producto:</h3>
      <input class="producto" type="text" placeholder="Nombre" v-model="nombre" required />
      <br>
      <br>
      <h3>Ingresa precio:</h3>
      <input class="producto" type="text" v-model="precio" required />
      <h4>*formato: 100.000</h4>
      <br>
      
      <v-btn normal rounded><input type="submit" value="Añadir" /></v-btn>
    </form>
    <br>
    <hr />
    
    <h3>Vista previa:</h3>
    <br>
    <ul>
      <li v-for="(producto, indice) in productos" :key="indice">
        {{ producto.nombre }} - {{ producto.precio.toFixed(2) + 'CLP' }}
        <v-btn x-small color="secondary" dark
          @click="comprarProducto(indice)"
        >agregar al total</v-btn>
      </li>
    </ul>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    data(){
        return{
            nombre: '',
            precio: 0
        }
    },
  computed: mapState(['productos']),
  
  methods: {
      ...mapMutations(['comprarProducto']),
      anadir(){
          this.$store.commit('anadirProducto', {
              nombre: this.nombre,
              precio: Number(this.precio),
          });
          this.nombre = '';
           this.precio = 0;
      }
  }
}
</script>

<style lang="scss">
  .producto{
    background: yellow;
    border: solid 1px red;
  }
</style>
