<script setup>

</script>

<template>
<h1>Conic Gradient - Pie Chart</h1>
<div id="grad1"></div>

</template>

<style>
#grad1 {
  height: 200px;
  width: 200px;
  background-color: red; /* For browsers that do not support gradients */
  background-image: conic-gradient(white, red 5deg, red 85deg, white 90deg );
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 black;
}
#grad1:after {
  display: block;
  content: "";
  position: absolute;
  height: 130px;
  width: 130px;
  border-radius: 50%;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: inset 0 0 6px 4px #00000057;
}
#grad1:before {
  display: block;
  content: "";
  position: absolute;
  height: 180px;
  width: 180px;
  border-radius: 50%;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: conic-gradient(white,red 5deg, red 85deg, white, yellow 90deg, yellow 175deg, white, green 180deg, green 265deg, white, blue 270deg);
}
</style>
