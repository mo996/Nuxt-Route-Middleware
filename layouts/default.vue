<template>
  <header>
    <nav>
      <h1>Nuxt Middleware</h1>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/admin">Admin</NuxtLink>
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/logout">Logout</NuxtLink>
    </nav>
  </header>
  <main>
    <slot></slot>
  </main>
</template>

<style>
  body {
    margin: 0;
    background: #f0f0f5;
    font-family: 'Rubik', sans-serif;
    color: #333333;
  }

  header {
    background: #1a237e;
    padding: 20px 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  nav {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    align-items: center;
    justify-content: space-between;
  }

  nav h1 {
    font-size: 1.8em;
    font-weight: 500;
    margin-right: auto;
    color: #ffeb3b;
  }

  nav a {
    color: #ffeb3b;
    margin-left: 25px;
    text-decoration: none;
    font-size: 1em;
    position: relative;
    transition: color 0.3s ease;
  }

  nav a::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #ffeb3b;
    transition: width 0.3s;
    position: absolute;
    bottom: -5px;
    left: 0;
  }

  nav a:hover::after {
    width: 100%;
  }

  nav a:hover {
    color: #fff176;
  }

  main {
    max-width: 1000px;
    margin: 20px auto;
    padding: 20px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    nav {
      flex-direction: column;
      text-align: center;
    }

    nav h1 {
      margin-bottom: 20px;
    }

    nav a {
      margin-left: 0;
      margin-bottom: 15px;
    }

    main {
      margin: 10px;
      padding: 15px;
    }
  }
</style>
