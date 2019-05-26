<template>
  <div class="profile views">
    <img src="../assets/image.png" class="avatar">
    <h1 class="username">Renata Martins</h1>
    <p>@rentamartins123</p>
    <p class="description">
      Sou engenheira, adoro praticar
        esportes e preciso tornar a caminhada uma parte
        da minha rotina. Também quero me conectar com o meu bairro.
    </p>
    <div class="rating">
      <star-rating :rating="5"
                      :read-only=true
                      :show-rating=false
                      :star-size=20 />
    </div>
  </div>
</template>

<style>
.profile {
    display: block;
    margin: auto;
    text-align: center;
    margin-top: 5px;
}

.avatar {
    border-radius: 50%;
}

.description {
    background-color: rgba(196, 196, 196, 0.164);
    font-size: 13px;
    padding: 10px;
}

.username {
    margin-top: 15px;
    margin-bottom: 0px;
    font-size: 25px;
}

.rating {
  margin: auto;
  display: block;
  width: 110px;
}
</style>
