<template>

    <div class="contain">
<h1>suksess!</h1>
<p>Terimakasih sudah memesan, silahkan tunggu pesanan anda akan kami proses</p>
    <RouterLink to="/"><button>Home</button></RouterLink>

    </div>
    
</template>

<style scoped>
.contain{
    display: flexbox;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
p{
    color: aliceblue;
}
h1{
    padding-top: 5em;
    color: aliceblue;
}
a{
    text-decoration: none;
    color: aliceblue;
    font-size: large;
    margin-top: 5em;
}
button{
    width: 100px;
    height: 50px;
    border-radius: 10px;
    background-color: chocolate;
    color: aliceblue;
    border: none;
    font-size: large;
    color: aliceblue;
    cursor: pointer;
    margin: 10px;
}
</style>