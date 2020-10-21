<template>
<div id="light">
  <div class="centered">
  <b-spinner variant="primary"  label="Spinning"></b-spinner>
  </div>
</div>
</template>

<style scoped>
#light{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  background-color:#00000088;
}
.centered {
  position: fixed !important;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}
</style>
