  <script setup>
  import { RouterLink, RouterView } from 'vue-router'
  </script>
  
  <template>
    <header> 
      <div class="home"> 
        <nav>
          <RouterLink to="/">首页</RouterLink>
          <RouterLink to="/orders">快递订单</RouterLink>
          <RouterLink to="/payments">支付记录</RouterLink>
          <RouterLink to="/logistics">物流状态</RouterLink>
          <RouterLink to="/login">登录</RouterLink>
        </nav>
      </div>
    </header>
    <main>
      <RouterView />
    </main>
  </template>
